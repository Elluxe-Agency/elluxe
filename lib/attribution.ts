// First-touch ad attribution for the application form.
// On every page view we remember the Google Ads click id (gclid) and any utm_* parameters the
// visitor arrived with, so the form can report which ad brought her even if she browses first.
const KEY = "elluxe_attribution_v1";

export type Attribution = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing?: string;
  referrer?: string;
  first_seen?: string;
};

const PARAMS: (keyof Attribution)[] = [
  "gclid", "gbraid", "wbraid", "fbclid",
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
];

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const found: Attribution = {};
    for (const p of PARAMS) {
      const v = url.searchParams.get(p);
      if (v) found[p] = v.slice(0, 200);
    }
    const stored = readStored();
    const hasClick = (a: Attribution) => !!(a.gclid || a.gbraid || a.wbraid || a.fbclid || a.utm_source);
    // keep the first ad click we saw; a later visit with a new click id replaces an organic record
    if (hasClick(found) && !hasClick(stored)) {
      const a: Attribution = {
        ...found,
        landing: url.pathname + url.search.slice(0, 300),
        referrer: (document.referrer || "").slice(0, 200),
        first_seen: new Date().toISOString(),
      };
      window.localStorage.setItem(KEY, JSON.stringify(a));
    } else if (!stored.first_seen) {
      window.localStorage.setItem(KEY, JSON.stringify({
        ...found,
        landing: url.pathname,
        referrer: (document.referrer || "").slice(0, 200),
        first_seen: new Date().toISOString(),
      }));
    }
  } catch {
    /* storage blocked: attribution simply stays empty */
  }
}

function readStored(): Attribution {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  captureAttribution();
  return readStored();
}
