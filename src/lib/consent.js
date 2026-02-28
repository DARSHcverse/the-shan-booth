const CONSENT_COOKIE_NAME = "tsb_consent";
const CONSENT_COOKIE_VERSION = "v1";

export const DEFAULT_CONSENT = Object.freeze({
  analytics: false,
  marketing: false,
});

function parseCookieString(cookieString) {
  const out = {};
  if (!cookieString) return out;

  cookieString.split(";").forEach((part) => {
    const [rawKey, ...rawValueParts] = part.trim().split("=");
    if (!rawKey) return;
    out[decodeURIComponent(rawKey)] = decodeURIComponent(rawValueParts.join("=") || "");
  });

  return out;
}

export function readConsentFromCookie(cookieString) {
  const cookies = parseCookieString(cookieString);
  const raw = cookies[CONSENT_COOKIE_NAME];
  if (!raw) return { consent: { ...DEFAULT_CONSENT }, hasChoice: false };

  const segments = raw.split("|").map((s) => s.trim()).filter(Boolean);
  if (segments.length === 0 || segments[0] !== CONSENT_COOKIE_VERSION) {
    return { consent: { ...DEFAULT_CONSENT }, hasChoice: false };
  }

  const consent = { ...DEFAULT_CONSENT };
  for (const segment of segments.slice(1)) {
    const [key, value] = segment.split("=");
    if (!key) continue;
    if (key === "analytics") consent.analytics = value === "1";
    if (key === "marketing") consent.marketing = value === "1";
  }

  return { consent, hasChoice: true };
}

export function serializeConsentCookie(consent) {
  const analytics = consent?.analytics ? "1" : "0";
  const marketing = consent?.marketing ? "1" : "0";
  return `${CONSENT_COOKIE_VERSION}|analytics=${analytics}|marketing=${marketing}`;
}

export function writeConsentCookie(consent) {
  if (typeof document === "undefined") return;

  const value = serializeConsentCookie(consent);
  const attributes = ["Path=/", "Max-Age=31536000", "SameSite=Lax"];

  if (typeof window !== "undefined" && window.location?.protocol === "https:") {
    attributes.push("Secure");
  }

  document.cookie = `${encodeURIComponent(CONSENT_COOKIE_NAME)}=${encodeURIComponent(value)}; ${attributes.join(
    "; ",
  )}`;
}

export function clearConsentCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(CONSENT_COOKIE_NAME)}=; Path=/; Max-Age=0; SameSite=Lax`;
}

