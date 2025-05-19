import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase();

  if (!query || query.length < 3) {
    return NextResponse.json([], { status: 200 });
  }

  const { data, error } = await supabase
    .from('search_logs')
    .select('keyword, frequency')
    .ilike('keyword', `%${query}%`)
    .order('frequency', { ascending: false })
    .limit(5);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
