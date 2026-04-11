"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Module } from "@/lib/types";
import { SectionRenderer } from "./SectionRenderer";
import { Quiz } from "./Quiz";
import {
  loadTrainee,
  markStarted,
  markRead,
  recordQuizScore,
  submitProgress,
} from "@/lib/storage";
import { MODULES } from "@/content/modules";

export function ModuleReader({ module: mod }: { module: Module }) {
  const router = useRouter();
  const [hasRead, setHasRead] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const t = loadTrainee();
    if (!t) {
      router.replace("/");
      return;
    }
    markStarted(mod.slug);
    const p = t.progress[mod.slug];
    if (p?.readAt) setHasRead(true);
    if (p?.completed) setShowQuiz(true);
  }, [mod.slug, router]);

  const nextIdx = MODULES.findIndex((m) => m.slug === mod.slug) + 1;
  const next = MODULES[nextIdx];

  return (
    <article className="px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/academy/"
          className="tracked text-muted hover:text-ink transition-colors inline-block mb-10"
        >
          ← Academy
        </Link>

        <header className="mb-16">
          <div className="tracked text-gold-dark mb-4">{mod.eyebrow}</div>
          <h1 className="serif text-5xl md:text-7xl text-ink leading-[1.02] mb-4">
            {mod.title}
          </h1>
          <div className="rule-gold mb-6" />
          <p className="serif text-2xl md:text-3xl text-muted italic leading-snug max-w-[50ch]">
            {mod.subtitle}
          </p>
          <div className="tracked text-muted mt-6">
            {mod.readingTime} minute read
          </div>
        </header>

        <div className="space-y-4">
          {mod.sections.map((s, i) => (
            <SectionRenderer key={i} section={s} />
          ))}
        </div>

        {!hasRead && (
          <div className="mt-20 pt-10 border-t border-line max-w-[62ch]">
            <p className="text-[15px] text-muted mb-6 italic">
              When you have finished reading this module, mark it as read to
              unlock the module assessment.
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => {
                markRead(mod.slug);
                setHasRead(true);
                setShowQuiz(true);
                window.scrollTo({ top: window.scrollY + 100, behavior: "smooth" });
              }}
            >
              Mark as read
            </button>
          </div>
        )}

        {hasRead && !showQuiz && (
          <div className="mt-20 pt-10 border-t border-line max-w-[62ch]">
            <button
              type="button"
              className="btn"
              onClick={() => setShowQuiz(true)}
            >
              Begin the module assessment
            </button>
          </div>
        )}

        {showQuiz && (
          <>
            <div className="mt-10 pt-10 border-t border-line" />
            <Quiz
              questions={mod.quiz}
              passingScore={80}
              title={`${mod.title} · Check your understanding`}
              onComplete={(score, passed) => {
                const t = recordQuizScore(mod.slug, score);
                if (t) void submitProgress(t);
                if (passed && next) {
                  setTimeout(() => {
                    router.push(`/academy/modules/${next.slug}/`);
                  }, 3000);
                } else if (passed && !next) {
                  setTimeout(() => {
                    router.push(`/academy/`);
                  }, 3000);
                }
              }}
            />
            {next && (
              <div className="mt-6 max-w-[60ch] text-[13px] text-muted italic">
                On passing, you will be taken to Module {next.number},{" "}
                {next.title}.
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}
