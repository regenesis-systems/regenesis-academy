"use client";

import type { Trainee, ModuleProgress } from "./types";

const KEY = "regenesis-academy-trainee-v1";

export function loadTrainee(): Trainee | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Trainee) : null;
  } catch {
    return null;
  }
}

export function saveTrainee(t: Trainee): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(t));
}

export function clearTrainee(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export function enroll(input: {
  name: string;
  email: string;
  role: string;
  propertyCode: string;
}): Trainee {
  const id =
    "tr_" +
    Math.random().toString(36).slice(2, 10) +
    Date.now().toString(36);
  const trainee: Trainee = {
    id,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    role: input.role.trim(),
    propertyCode: input.propertyCode.trim().toUpperCase(),
    enrolledAt: new Date().toISOString(),
    progress: {},
  };
  saveTrainee(trainee);
  return trainee;
}

export function markStarted(slug: string): Trainee | null {
  const t = loadTrainee();
  if (!t) return null;
  const prev = t.progress[slug] ?? {
    started: false,
    completed: false,
    quizAttempts: 0,
  };
  t.progress[slug] = { ...prev, started: true };
  saveTrainee(t);
  return t;
}

export function markRead(slug: string): Trainee | null {
  const t = loadTrainee();
  if (!t) return null;
  const prev = t.progress[slug] ?? {
    started: true,
    completed: false,
    quizAttempts: 0,
  };
  t.progress[slug] = {
    ...prev,
    started: true,
    readAt: new Date().toISOString(),
  };
  saveTrainee(t);
  return t;
}

export function recordQuizScore(slug: string, score: number): Trainee | null {
  const t = loadTrainee();
  if (!t) return null;
  const prev = t.progress[slug] ?? {
    started: true,
    completed: false,
    quizAttempts: 0,
  };
  const best = Math.max(prev.quizScore ?? 0, score);
  t.progress[slug] = {
    ...prev,
    started: true,
    completed: best >= 80,
    quizScore: best,
    quizAttempts: prev.quizAttempts + 1,
    readAt: prev.readAt ?? new Date().toISOString(),
  };
  saveTrainee(t);
  return t;
}

export function recordFinalScore(score: number): Trainee | null {
  const t = loadTrainee();
  if (!t) return null;
  t.finalScore = Math.max(t.finalScore ?? 0, score);
  if (score >= 80 && !t.certificateIssuedAt) {
    t.certificateIssuedAt = new Date().toISOString();
  }
  saveTrainee(t);
  return t;
}

export function allModulesComplete(
  trainee: Trainee | null,
  slugs: string[],
): boolean {
  if (!trainee) return false;
  return slugs.every((s) => trainee.progress[s]?.completed);
}

export function progressPercent(
  trainee: Trainee | null,
  slugs: string[],
): number {
  if (!trainee) return 0;
  const done = slugs.filter((s) => trainee.progress[s]?.completed).length;
  return Math.round((done / slugs.length) * 100);
}

const SUBMIT_URL = process.env.NEXT_PUBLIC_SUBMIT_URL ?? "";

export async function submitEnrollment(trainee: Trainee): Promise<void> {
  if (!SUBMIT_URL) return;
  try {
    await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "enrollment", trainee }),
      keepalive: true,
    });
  } catch {}
}

export async function submitProgress(trainee: Trainee): Promise<void> {
  if (!SUBMIT_URL) return;
  try {
    await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "progress", trainee }),
      keepalive: true,
    });
  } catch {}
}
