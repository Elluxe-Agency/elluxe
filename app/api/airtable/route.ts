const ALLOWED_ORIGINS = [
  "https://elluxe.cc",
  "https://www.elluxe.cc",
  "https://elluxe-cc.pages.dev",
];

function corsHeaders(origin: string | null): Record<string, string> {
  const ok =
    !!origin &&
    (ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".elluxe-cc.pages.dev"));
  return ok
    ? {
        "Access-Control-Allow-Origin": origin as string,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        Vary: "Origin",
      }
    : {};
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}

export async function POST(request: Request) {
  const cors = corsHeaders(request.headers.get("origin"));
  try {
    const data = await request.json();
    const records = [{ fields: data }];

    const response = await fetch(
      "https://api.airtable.com/v0/appm66Ee7Q3nJV9zQ/Leads",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records, typecast: true }),
      }
    );

    if (!response.ok)
      throw new Error(`Error posting to Airtable: ${response.statusText}`);

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
        ...cors,
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : error }),
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "application/json",
          ...cors,
        },
      }
    );
  }
}
