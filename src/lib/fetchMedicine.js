import { supabase } from '@/lib/supabaseClient'; // sesuaikan path

/**
 * Fetch medicine data by KFA code or medicine name
 * 
 * @param {string} value - The code or name to search for
 * @param {'kfa_code'|'medicine_name'} type - The search type
 */

export async function fetchMedicineAuto(input) {
  try {
    const isCode = /^\d+$/.test(input);

    let dbData = null;
    let kfaCode = null;

    if (isCode) {
      // Langsung cari dengan kfa_code
      const { data } = await supabase
        .from('medicines')
        .select('*')
        .eq('kfa_code', input)
        .maybeSingle();

      dbData = data;
      kfaCode = input;
    } else {
      // Cari berdasarkan medicine_name dulu
      const { data } = await supabase
        .from('medicines')
        .select('*')
        .ilike('medicine_name', `%${input}%`) // case-insensitive partial match
        .maybeSingle();

      dbData = data;
      kfaCode = data?.kfa_code;
    }

    // Jika tidak ditemukan di database
    if (!kfaCode) {
      return {
        api: null,
        db: null,
        error: 'Obat tidak ditemukan di database',
      };
    }

    // Fetch dari API pakai kfa_code
    const apiRes = await fetch(`/api/products?code=${kfaCode}`);
    const apiData = await apiRes.json();

    return {
      api: apiData?.result || null,
      db: dbData || null,
    };
  } catch (err) {
    return {
      api: null,
      db: null,
      error: err.message || 'Unexpected error',
    };
  }
}
