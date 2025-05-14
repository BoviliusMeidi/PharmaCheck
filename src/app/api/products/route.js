export async function getAccessToken() {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  const response = await fetch("https://api-satusehat-stg.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Failed to get token: ${response.status} - ${errorData}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code") || "";
  // 93004418
  const accessToken = await getAccessToken();
  const url = 'https://api-satusehat-stg.dto.kemkes.go.id/kfa-v2/products';
  const params = new URLSearchParams({
    code: code,
  });

  const fullUrl = `${url}?${params.toString()}`;

  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
  }
}