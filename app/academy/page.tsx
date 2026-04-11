"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MODULES } from "@/content/modules";
import { loadTrainee, progressPercent } from "@/lib/storage";
import type { Trainee } from "@/lib/types";

export default function AcademyHome() {
  const [trainee, setTrainee] = useState<Trainee | null>(null);

  useEffect(() => {
    setTrainee(loadTrainee());
  }, []);

  const slugs = MODULES.map((m) => m.slug);
  const pct = progressPercent(trainee, slugs);
  const allDone = pct === 100;

  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="tracked text-gold-dark mb-4">Your Academy</div>
        <h1 className="serif text-5xl md:text-6xl text-ink mb-4 leading-[1.05]">
          {trainee ? `Welcome, ${trainee.name.split(" ")[0]}.` : "Welcome."}
        </h1>
        <div className="rule-gold mb-8" />
        <p className="text-[17px] leading-[1.75] text-charcoal max-w-[58ch] mb-10">
          Six modules. Each one ends in a short assessment. When every module
          is complete you will sit the Final Assessment, and on passing,
          receive your Certified Regenesis Pod Concierge certificate in your
          own name.
        </p>

        <div className="mb-16">
          <div className="flex items-baseline justify-between mb-3">
            <div className="tracked text-muted">Your progress</div>
            <div className="serif text-2xl text-ink">{pct}%</div>
          </div>
          <div className="h-[2px] bg-stone relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gold transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="space-y-1">
          {MODULES.map((m) => {
            const p = trainee?.progress[m.slug];
            const done = p?.completed;
            const started = p?.started;
            const score = p?.quizScore;
            return (
              <Link
                key={m.slug}
                href={`/academy/modules/${m.slug}/`}
                className="block group"
              >
                <div className="py-6 border-b border-line grid grid-cols-12 gap-6 items-baseline hover:bg-cream/40 transition-colors -mx-4 px-4">
                  <div className="col-span-2 md:col-span-1">
                    <div className="serif text-3xl text-gold-dark">
                      {String(m.number).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="col-span-7 md:col-span-8">
                    <div className="tracked text-muted text-[10px] mb-1">
                      {m.eyebrow}
                    </div>
                    <h3 className="serif text-2xl md:text-3xl text-ink group-hover:text-gold-dark transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-[14px] text-muted mt-1">{m.subtitle}</p>
                  </div>
                  <div className="col-span-3 md:col-span-3 text-right">
                    <div className="text-[13px] text-muted">
                      {m.readingTime} min
                    </div>
                    <div className="tracked text-[10px] mt-2">
                      {done ? (
                        <span className="text-gold-dark">
                          ✓ Complete{score ? ` · ${score}%` : ""}
                        </span>
                      ) : started ? (
                        <span className="text-muted">In progress</span>
                      ) : (
                        <span className="text-muted">Not started</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16">
          <div
            className={`border p-10 ${
              allDone ? "border-gold bg-gold/5" : "border-line bg-cream/40"
            }`}
          >
            <div className="tracked text-gold-dark mb-3">Final Assessment</div>
            <h3 className="serif text-3xl text-ink mb-3">
              {allDone
                ? "You are ready."
                : "Unlocks when every module is complete"}
            </h3>
            <p className="text-[15px] text-muted mb-6 max-w-[52ch]">
              Fifteen questions drawn from every module. Passing score is 80%.
              You may retake as many times as you need. The Academy is
              designed for mastery, not speed.
            </p>
            {allDone ? (
              <Link href="/academy/assessment/" className="btn btn-gold">
                Begin the Final Assessment
              </Link>
            ) : (
              <div className="tracked text-muted">
                Complete all six modules to unlock
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
