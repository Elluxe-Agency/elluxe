// Application API on the Elluxe VPS: live Instagram/TikTok profile check while the creator fills
// the form, and the submit that stores the lead only when the profile is real.
export const APPLY_API = "https://srv1044691.hstgr.cloud/apply";

export type SocialCheck = {
  status: "ok" | "private" | "not_found" | "junk" | "unchecked";
  platform: "instagram" | "tiktok" | null;
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
  accepted: true,
  message: "We couldn't verify this right now — you can continue.",
};

export async function checkSocial(social: string): Promise<SocialCheck> {
  const r = await fetch(`${APPLY_API}/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ social }),
  });
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
  const r = await fetch(`${APPLY_API}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
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
