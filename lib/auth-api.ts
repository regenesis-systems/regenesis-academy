/**
 * Client for the Regenesis Academy auth backend.
 *
 * Backend lives at https://auth.regenesispod.com (overridable for local dev).
 * Endpoints:
 *   POST /auth/request   - email a magic link
 *   GET  /auth/verify    - validate a magic-link token, return trainee state
 */
import type { Trainee } from "./types";

const AUTH_API_URL =
  process.env.NEXT_PUBLIC_AUTH_API_URL ?? "https://auth.regenesispod.com";

export type SignInRequest = {
  email: string;
  cohort_code?: string;
  name?: string;
  role?: string;
};

export async function requestSignIn(
  req: SignInRequest,
): Promise<{ ok: boolean }> {
  const res = await fetch(`${AUTH_API_URL}/auth/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) {
    let detail = `Request failed: ${res.status}`;
    try {
      const body = await res.json();
      if (body?.detail) detail = body.detail;
    } catch {}
    throw new Error(detail);
  }
  return res.json();
}

export type VerifyResult = {
  ok: boolean;
  trainee: Trainee;
  kind: "welcome" | "resume";
};

export async function verifyToken(token: string): Promise<VerifyResult> {
  const res = await fetch(
    `${AUTH_API_URL}/auth/verify?token=${encodeURIComponent(token)}`,
    { method: "GET" },
  );
  if (!res.ok) {
    let detail = `Verification failed: ${res.status}`;
    try {
      const body = await res.json();
      if (body?.detail) detail = body.detail;
    } catch {}
    throw new Error(detail);
  }
  return res.json();
}
