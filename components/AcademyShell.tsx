"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Trainee } from "@/lib/types";
import { loadTrainee, clearTrainee } from "@/lib/storage";
import { getProperty } from "@/content/properties";

export function AcademyShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [trainee, setTrainee] = useState<Trainee | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = loadTrainee();
    if (!t) {
      router.replace("/");
      return;
    }
    setTrainee(t);
  }, [router]);

  if (!mounted || !trainee) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="tracked text-muted">Loading…</div>
      </div>
    );
  }

  const property = getProperty(trainee.propertyCode);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          <Link href="/academy/" className="flex items-baseline gap-3">
            <div className="serif text-xl text-ink">Regenesis</div>
            <div className="tracked text-gold-dark">Academy</div>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <div className="text-right">
              <div className="text-[13px] text-ink leading-tight">{trainee.name}</div>
              <div className="tracked text-muted text-[10px]">
                {trainee.role} · {property?.name ?? trainee.propertyCode}
              </div>
            </div>
            <button
              onClick={() => {
                clearTrainee();
                router.push("/");
              }}
              className="tracked text-muted hover:text-ink transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-line px-6 md:px-12 py-8 mt-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="tracked text-muted">
            Regenesis Academy · Founding Cohort
          </div>
          <div className="tracked text-muted">v0.1</div>
        </div>
      </footer>
    </div>
  );
}
