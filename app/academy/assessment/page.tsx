"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FINAL_ASSESSMENT } from "@/content/assessment";
import { Quiz } from "@/components/Quiz";
import { MODULES } from "@/content/modules";
import {
  loadTrainee,
  allModulesComplete,
  recordFinalScore,
  submitProgress,
} from "@/lib/storage";

export default function AssessmentPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const t = loadTrainee();
    if (!t) {
      router.replace("/");
      return;
    }
    if (!allModulesComplete(t, MODULES.map((m) => m.slug))) {
      setBlocked(true);
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="px-6 py-20 text-center">
        <div className="tracked text-muted">Loading…</div>
      </div>
    );
  }

  if (blocked) {
    return (
      <div className="px-6 md:px-12 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="tracked text-gold-dark mb-4">Not quite yet</div>
          <h1 className="serif text-4xl md:text-5xl text-ink mb-4">
            Complete the six modules first
          </h1>
          <div className="rule-gold mx-auto mb-6" />
          <p className="text-[15px] text-muted mb-10 max-w-[52ch] mx-auto leading-relaxed">
            The Final Assessment is unlocked when every module is complete.
            You&apos;re so close. Head back to the Academy to finish the
            remaining modules.
          </p>
          <Link href="/academy/" className="btn">
            Back to the Academy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/academy/"
          className="tracked text-muted hover:text-ink transition-colors inline-block mb-10"
        >
          ← Academy
        </Link>

        <header className="mb-16">
          <div className="tracked text-gold-dark mb-4">Final Assessment</div>
          <h1 className="serif text-5xl md:text-7xl text-ink leading-[1.02] mb-4">
            The last step.
          </h1>
          <div className="rule-gold mb-8" />
          <p className="text-[17px] leading-[1.75] text-charcoal max-w-[58ch]">
            Fifteen questions drawn from every module. You need 80% to pass.
            Take your time, read each question carefully, and when you are
            sure, submit. On passing, your certificate will be generated
            immediately.
          </p>
        </header>

        <Quiz
          questions={FINAL_ASSESSMENT}
          passingScore={80}
          title="The Regenesis Academy Final Assessment"
          onComplete={(score, passed) => {
            const t = recordFinalScore(score);
            if (t) void submitProgress(t);
            if (passed) {
              setTimeout(() => {
                router.push("/academy/certificate/");
              }, 2500);
            }
          }}
        />
      </div>
    </div>
  );
}
