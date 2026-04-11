"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MODULES } from "@/content/modules";
import { PROPERTIES } from "@/content/properties";
import { loadTrainee } from "@/lib/storage";
import type { Trainee } from "@/lib/types";

const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL ?? "";
const ADMIN_CODE_HINT = "regenesis-founding";

type Row = Trainee;

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("ALL");
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("academy-admin-ok");
      if (stored === "yes") setUnlocked(true);
    }
  }, []);

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim().toLowerCase() !== ADMIN_CODE_HINT) {
      setError("Incorrect code.");
      return;
    }
    setUnlocked(true);
    sessionStorage.setItem("academy-admin-ok", "yes");
    setError(null);
  }

  async function fetchRows() {
    setLoading(true);
    setError(null);
    const collected: Row[] = [];
    const self = loadTrainee();
    if (self) collected.push(self);
    if (ADMIN_URL) {
      try {
        const res = await fetch(ADMIN_URL, {
          headers: { "X-Academy-Admin": ADMIN_CODE_HINT },
        });
        if (res.ok) {
          const data: unknown = await res.json();
          if (Array.isArray(data)) {
            for (const d of data) {
              if (d && typeof d === "object" && "id" in d) {
                collected.push(d as Row);
              }
            }
          }
        }
      } catch (err) {
        setError(
          "Couldn't reach the submissions endpoint. Showing local data only.",
        );
      }
    }
    const unique = new Map<string, Row>();
    for (const r of collected) unique.set(r.id, r);
    setRows(Array.from(unique.values()));
    setFetched(true);
    setLoading(false);
  }

  useEffect(() => {
    if (unlocked && !fetched) void fetchRows();
  }, [unlocked, fetched]);

  const filtered = useMemo(() => {
    if (filter === "ALL") return rows;
    return rows.filter((r) => r.propertyCode === filter);
  }, [rows, filter]);

  const stats = useMemo(() => {
    const total = filtered.length;
    const certified = filtered.filter(
      (r) => r.certificateIssuedAt && (r.finalScore ?? 0) >= 80,
    ).length;
    const inProgress = filtered.filter(
      (r) =>
        !r.certificateIssuedAt &&
        Object.values(r.progress).some((p) => p?.started),
    ).length;
    const avgScore =
      filtered
        .filter((r) => typeof r.finalScore === "number")
        .reduce((a, r) => a + (r.finalScore ?? 0), 0) /
        Math.max(1, filtered.filter((r) => typeof r.finalScore === "number").length) || 0;
    return { total, certified, inProgress, avgScore: Math.round(avgScore) };
  }, [filtered]);

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <form
          onSubmit={handleUnlock}
          className="max-w-sm w-full border border-line bg-cream/50 p-10"
        >
          <div className="tracked text-gold-dark mb-3">Admin</div>
          <h1 className="serif text-3xl text-ink mb-2">Regenesis HQ</h1>
          <div className="rule-gold mb-8" />
          <label className="block mb-6">
            <div className="tracked text-muted mb-2 text-[10px]">Access code</div>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="••••••••••"
              autoFocus
            />
          </label>
          {error && (
            <div className="mb-6 text-[14px] text-muted italic border-l border-gold pl-4">
              {error}
            </div>
          )}
          <button type="submit" className="btn w-full justify-center">
            Unlock
          </button>
          <Link
            href="/"
            className="block tracked text-muted hover:text-ink mt-6 text-center"
          >
            ← Back to Academy
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-line px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <div className="serif text-xl text-ink">Regenesis Academy</div>
            <div className="tracked text-gold-dark mt-1">HQ Admin</div>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="tracked text-muted hover:text-ink"
              onClick={() => void fetchRows()}
            >
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <Link href="/" className="tracked text-muted hover:text-ink">
              Exit
            </Link>
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="tracked text-gold-dark mb-3">Fleet overview</div>
            <h1 className="serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              Who is learning · and how well
            </h1>
            <div className="rule-gold" />
          </div>

          {error && (
            <div className="mb-10 text-[14px] text-muted italic border-l border-gold pl-4 max-w-xl">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-4 gap-8 mb-14 pb-10 border-b border-line">
            <Stat label="Enrolled" value={stats.total} />
            <Stat label="Certified" value={stats.certified} gold />
            <Stat label="In progress" value={stats.inProgress} />
            <Stat label="Avg final score" value={`${stats.avgScore}%`} />
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="tracked text-muted">Property</div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ maxWidth: 260 }}
            >
              <option value="ALL">All properties</option>
              {Object.values(PROPERTIES).map((p) => (
                <option key={p.code} value={p.code}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <div className="tracked text-muted mb-2">No trainees yet</div>
              <p className="text-[14px] text-muted max-w-md mx-auto">
                Enrolments will appear here as soon as they begin. If you are
                testing, enrol yourself on the home page first.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="grid grid-cols-12 gap-4 py-3 border-b border-line tracked text-muted text-[10px]">
                <div className="col-span-4">Name · Role</div>
                <div className="col-span-3">Property</div>
                <div className="col-span-3">Progress</div>
                <div className="col-span-2 text-right">Final</div>
              </div>
              {filtered.map((r) => {
                const completedCount = MODULES.filter(
                  (m) => r.progress[m.slug]?.completed,
                ).length;
                const pct = Math.round(
                  (completedCount / MODULES.length) * 100,
                );
                const prop = PROPERTIES[r.propertyCode];
                const certified =
                  !!r.certificateIssuedAt && (r.finalScore ?? 0) >= 80;
                return (
                  <div
                    key={r.id}
                    className="grid grid-cols-12 gap-4 py-5 border-b border-line items-baseline hover:bg-cream/40 -mx-4 px-4"
                  >
                    <div className="col-span-4">
                      <div className="serif text-xl text-ink">{r.name}</div>
                      <div className="tracked text-muted text-[10px] mt-1">
                        {r.role} · {r.email}
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="text-[14px] text-charcoal">
                        {prop?.name ?? r.propertyCode}
                      </div>
                      <div className="tracked text-muted text-[10px] mt-1">
                        {prop?.cohort ?? "—"}
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="flex-1 h-[2px] bg-stone relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-gold"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <div className="text-[12px] text-muted w-10 text-right">
                          {pct}%
                        </div>
                      </div>
                      <div className="tracked text-muted text-[10px]">
                        {completedCount} of {MODULES.length} modules
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      {certified ? (
                        <>
                          <div className="serif text-2xl text-gold-dark">
                            {r.finalScore}%
                          </div>
                          <div className="tracked text-gold-dark text-[10px] mt-1">
                            ✓ Certified
                          </div>
                        </>
                      ) : typeof r.finalScore === "number" ? (
                        <>
                          <div className="serif text-2xl text-muted">
                            {r.finalScore}%
                          </div>
                          <div className="tracked text-muted text-[10px] mt-1">
                            Retake needed
                          </div>
                        </>
                      ) : (
                        <div className="tracked text-muted text-[10px]">
                          —
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  gold = false,
}: {
  label: string;
  value: string | number;
  gold?: boolean;
}) {
  return (
    <div>
      <div className="tracked text-muted mb-2">{label}</div>
      <div
        className={`serif text-5xl ${gold ? "text-gold-dark" : "text-ink"}`}
      >
        {value}
      </div>
    </div>
  );
}
