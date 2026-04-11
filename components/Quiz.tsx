"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/types";

export function Quiz({
  questions,
  onComplete,
  passingScore = 80,
  title = "Check your understanding",
}: {
  questions: QuizQuestion[];
  onComplete: (score: number, passed: boolean) => void;
  passingScore?: number;
  title?: string;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);

  const score = submitted
    ? Math.round(
        (questions.filter((q, i) => answers[i] === q.answer).length /
          questions.length) *
          100,
      )
    : 0;
  const passed = score >= passingScore;

  function handleSubmit() {
    if (!allAnswered) return;
    setSubmitted(true);
    const s = Math.round(
      (questions.filter((q, i) => answers[i] === q.answer).length /
        questions.length) *
        100,
    );
    onComplete(s, s >= passingScore);
  }

  function handleRetry() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section className="my-16">
      <div className="max-w-[60ch]">
        <div className="tracked text-gold-dark mb-3">Assessment</div>
        <h3 className="serif text-3xl md:text-4xl text-ink mb-2">{title}</h3>
        <div className="rule-gold mb-8" />
        <p className="text-[15px] text-muted mb-10">
          {passingScore}% or higher to advance. You may retake the quiz as many
          times as you need — the Academy is designed for mastery, not speed.
        </p>
      </div>

      <div className="space-y-10 max-w-[62ch]">
        {questions.map((q, i) => {
          const picked = answers[i];
          const correct = q.answer;
          return (
            <div key={i} className="border-b border-line pb-10">
              <div className="flex gap-5">
                <div className="serif text-2xl text-gold-dark pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <p className="serif text-xl md:text-2xl text-ink leading-snug mb-6">
                    {q.q}
                  </p>
                  <div className="space-y-3">
                    {q.options.map((opt, j) => {
                      const isPicked = picked === j;
                      const isCorrect = submitted && j === correct;
                      const isWrongPick = submitted && isPicked && j !== correct;
                      return (
                        <button
                          key={j}
                          type="button"
                          onClick={() => {
                            if (submitted) return;
                            setAnswers({ ...answers, [i]: j });
                          }}
                          disabled={submitted}
                          className={`block w-full text-left px-5 py-4 border transition-all text-[15px] leading-relaxed ${
                            isCorrect
                              ? "border-gold bg-gold/10 text-ink"
                              : isWrongPick
                                ? "border-muted/40 bg-stone/30 text-muted line-through"
                                : isPicked
                                  ? "border-ink bg-cream text-ink"
                                  : "border-line bg-paper text-charcoal hover:border-gold hover:bg-cream/40"
                          }`}
                        >
                          <span className="tracked text-[10px] text-gold-dark mr-3">
                            {String.fromCharCode(65 + j)}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && q.explain && (
                    <div className="mt-5 text-[14px] leading-relaxed text-muted italic border-l border-gold pl-4">
                      {q.explain}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-10 flex items-center gap-6">
          <button
            type="button"
            className="btn"
            onClick={handleSubmit}
            disabled={!allAnswered}
            style={{ opacity: allAnswered ? 1 : 0.4, cursor: allAnswered ? "pointer" : "not-allowed" }}
          >
            Submit answers
          </button>
          <span className="text-[13px] text-muted">
            {Object.keys(answers).length} of {questions.length} answered
          </span>
        </div>
      )}

      {submitted && (
        <div className="mt-12 max-w-[60ch]">
          <div className="rule-gold mb-6" />
          <div className="flex items-baseline gap-6 mb-4">
            <div className="serif text-6xl text-ink">{score}%</div>
            <div className={`tracked ${passed ? "text-gold-dark" : "text-muted"}`}>
              {passed ? "Passed" : "Not yet · retake the quiz"}
            </div>
          </div>
          <p className="text-[15px] text-muted leading-relaxed mb-6">
            {passed
              ? "You are ready to move forward. The answers you got right are highlighted in gold; the ones you missed are struck through. Take a moment to read the notes — they are where the real learning lives."
              : "Read the explanations carefully — they are where the real learning lives. Then retake the quiz. There is no limit, and there is no shame in a second pass."}
          </p>
          {!passed && (
            <button type="button" className="btn btn-ghost" onClick={handleRetry}>
              Retake the quiz
            </button>
          )}
        </div>
      )}
    </section>
  );
}
