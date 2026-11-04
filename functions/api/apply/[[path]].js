// Same-origin proxy for the Elluxe apply API (Cloudflare Pages Function).
// The form calls /api/apply/check and /api/apply/submit on elluxe.cc; this forwards to the VPS
// so the browser never has to reach a third-party host (blocked/slow for some visitors, 4 Nov 2026).
const UPSTREAM = "https://srv1044691.hstgr.cloud/apply";

export async function onRequest({ request, params }) {
  const path = Array.isArray(params.path) ? params.path.join("/") : params.path || "";
  if (request.method === "OPTIONS") return new Response(null, { status: 204 });
  if (request.method !== "POST" && request.method !== "GET")
    return new Response(JSON.stringify({ error: "method" }), { status: 405 });
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 70000);
  try {
    const r = await fetch(`${UPSTREAM}/${path}`, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Origin: "https://elluxe.cc",
        "X-Forwarded-For": request.headers.get("CF-Connecting-IP") || "",
      },
      body: request.method === "POST" ? await request.text() : undefined,
      signal: ctrl.signal,
    });
    const body = await r.text();
    return new Response(body, {
      status: r.status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "upstream", message: String(e) }), {
      status: 502,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } finally {
    clearTimeout(timer);
  }
}
