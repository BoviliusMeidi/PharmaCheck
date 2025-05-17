import { supabase } from '@/lib/supabaseClient'; // sesuaikan path

export async function fetchMedicineByCode(code) {
  try {
    const apiRes = await fetch(`/api/products?code=${code}`);
    const apiData = await apiRes.json();

    const { data: dbData} = await supabase
      .from('medicines')
      .select('*')
      .eq('kfa_code', code)
      .maybeSingle();

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
