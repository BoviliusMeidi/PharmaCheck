import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request) {
  let { keyword } = await request.json();

  if (!keyword || typeof keyword !== 'string') {
    return NextResponse.json({ error: 'Invalid keyword' }, { status: 400 });
  }

  keyword = keyword.trim().toLowerCase();

  if (keyword.length < 3) {
    return NextResponse.json({ error: 'Keyword too short' }, { status: 400 });
  }

  const { data: existing, error: selectError } = await supabase
    .from('search_logs')
    .select('id, frequency')
    .eq('keyword', keyword)
    .single();

  if (selectError && selectError.code !== 'PGRST116') {
    return NextResponse.json({ error: selectError.message }, { status: 500 });
  }

  if (existing) {
    const { error: updateError } = await supabase
      .from('search_logs')
      .update({ frequency: existing.frequency + 1 })
      .eq('id', existing.id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, updated: true });
  } else {
    const { error: insertError } = await supabase
      .from('search_logs')
      .insert([{ keyword, frequency: 1 }]);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, inserted: true });
  }
}
