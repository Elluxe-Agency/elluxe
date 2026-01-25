export async function POST(request: Request) {
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
        },
      }
    );
  }
}
