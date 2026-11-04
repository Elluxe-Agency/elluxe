// Application API: live Instagram/TikTok/Facebook profile check while the creator fills the form,
// and the submit that stores the lead only when the profile is confirmed.
// Same-origin path first (Cloudflare Pages Function proxy), direct VPS host as fallback.
const BASES = ["/api/apply", "https://srv1044691.hstgr.cloud/apply"];
const CHECK_TIMEOUT_MS = 60000;

export type Platform = "instagram" | "tiktok" | "facebook";

export type SocialCheck = {
  status: "ok" | "private" | "not_found" | "junk" | "unchecked";
  platform: Platform | null;
  handle: string | null;
  followers: number | null;
  profile_url: string;
  accepted: boolean;
  message: string;
};

export const UNCHECKED: SocialCheck = {
  status: "unchecked",
  platform: null,
  handle: null,
  followers: null,
  profile_url: "",
  accepted: false,
  message:
    "We couldn't reach our verification service. Please try again in a moment.",
};

async function post(path: string, body: unknown, timeoutMs: number): Promise<Response> {
  let lastErr: unknown = null;
  for (const base of BASES) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const r = await fetch(`${base}/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: ctrl.signal,
      });
      // a 404/405/5xx from the proxy layer itself (e.g. local preview without functions) → try the next base
      if (r.status === 404 || r.status === 405 || r.status === 502 || r.status === 503 || r.status === 504) {
        lastErr = new Error(`${base}: ${r.status}`);
        continue;
      }
      return r;
    } catch (e) {
      lastErr = e;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr ?? new Error("unreachable");
}

export async function checkSocial(
  social: string,
  platform: Platform
): Promise<SocialCheck> {
  const r = await post("check", { social, platform }, CHECK_TIMEOUT_MS);
  if (!r.ok) throw new Error(`check ${r.status}`);
  return (await r.json()) as SocialCheck;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: "social"; check: SocialCheck }
  | { ok: false; error: "other"; message: string };

export async function submitApplication(
  data: Record<string, unknown>
): Promise<SubmitResult> {
  const r = await post("submit", data, 90000);
  if (r.ok) return { ok: true };
  const body = await r.json().catch(() => ({}));
  if (r.status === 422 && body.error === "social")
    return { ok: false, error: "social", check: body as SocialCheck };
  return {
    ok: false,
    error: "other",
    message: body.message || "Something went wrong, please try again.",
  };
}
