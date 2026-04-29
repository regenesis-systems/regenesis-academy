"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadTrainee } from "@/lib/storage";
import { requestSignIn } from "@/lib/auth-api";
import { Wordmark } from "@/components/Wordmark";

const ROLES = [
  "Spa Reception",
  "Spa Therapist",
  "Villa Host",
  "Front Office",
  "Engineering",
  "Management",
  "Other",
];

type Step = "form" | "sent";

export default function SignInPage() {
  const [mounted, setMounted] = useState(false);
  const [existingName, setExistingName] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [showEnrol, setShowEnrol] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Spa Reception");
  const [cohortCode, setCohortCode] = useState("");

  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const t = loadTrainee();
    if (t) setExistingName(t.name);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (showEnrol) {
      if (!name.trim()) {
        setError("Please enter your full name.");
        return;
      }
      if (!cohortCode.trim()) {
        setError(
          "First-time enrolment needs the cohort code from your property's wellness lead.",
        );
        return;
      }
    }

    setSubmitting(true);
    try {
      await requestSignIn({
        email: cleanEmail,
        ...(showEnrol
          ? {
              name: name.trim(),
              role,
              cohort_code: cohortCode.trim().toUpperCase(),
            }
          : {}),
      });
      setStep("sent");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your sign-in link. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-8 md:px-16 py-10">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Wordmark size="lg" />
          {mounted && existingName && (
            <Link
              href="/academy/"
              className="tracked text-muted hover:text-ink transition-colors"
            >
              Continue as {existingName.split(" ")[0]} →
            </Link>
          )}
        </div>
      </header>

      <section className="flex-1 flex items-center px-8 md:px-16 py-16">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <div className="tracked text-gold-dark mb-6">
              Founding Cohort · April 2026
            </div>
            <h1 className="serif text-5xl md:text-7xl text-ink leading-[1.05] mb-8">
              An invitation
              <br />
              into the Pod.
            </h1>
            <div className="rule-gold mb-8" />
            <p className="text-[17px] md:text-[18px] leading-[1.75] text-charcoal max-w-[54ch] mb-8">
              Welcome to the Regenesis Academy, the certification experience
              for Aman staff entrusted with the Regenesis Pod across Aman
              properties worldwide.
            </p>
            <p className="text-[17px] leading-[1.75] text-charcoal max-w-[54ch] mb-8">
              You are joining the{" "}
              <em className="text-gold-dark">Founding Cohort</em>. Alongside a
              select group of colleagues at Amanyara, you will become part of
              the first team in the world to complete this programme, and your
              certification will carry that distinction.
            </p>
            <p className="text-[17px] leading-[1.75] text-charcoal max-w-[54ch] mb-8">
              Six modules, a final assessment, a certificate. Take your time.
              The Academy is designed for mastery, not speed.
            </p>
            <p className="text-[15px] italic leading-[1.7] text-muted max-w-[54ch]">
              Sign-in works without a password. You enter your email, we send
              you a sign-in link, you click it. The link is valid for thirty
              minutes; once you sign in, your session stays active for seven
              days.
            </p>
          </div>

          <div className="md:col-span-5">
            {step === "form" ? (
              <form
                onSubmit={handleSubmit}
                className="border border-line bg-cream/50 p-10"
              >
                <div className="tracked text-gold-dark mb-3">Sign in</div>
                <h2 className="serif text-3xl text-ink mb-2">
                  Begin or continue
                </h2>
                <div className="rule-gold mb-8" />

                <label className="block mb-6">
                  <div className="tracked text-muted mb-2 text-[10px]">
                    Email address
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@aman.com"
                    autoComplete="email"
                  />
                </label>

                {!showEnrol && (
                  <button
                    type="button"
                    onClick={() => setShowEnrol(true)}
                    className="block mb-6 tracked text-gold-dark hover:text-ink transition-colors text-[10px]"
                  >
                    First time? Enrol with cohort code →
                  </button>
                )}

                {showEnrol && (
                  <div className="border-t border-line pt-6 mb-6">
                    <div className="tracked text-gold-dark mb-3 text-[10px]">
                      First-time enrolment
                    </div>

                    <label className="block mb-6">
                      <div className="tracked text-muted mb-2 text-[10px]">
                        Your full name
                      </div>
                      <input
                        type="text"
                        required={showEnrol}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="As you would like it on the certificate"
                      />
                    </label>

                    <label className="block mb-6">
                      <div className="tracked text-muted mb-2 text-[10px]">
                        Your role
                      </div>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block mb-2">
                      <div className="tracked text-muted mb-2 text-[10px]">
                        Cohort code
                      </div>
                      <input
                        type="password"
                        required={showEnrol}
                        value={cohortCode}
                        onChange={(e) => setCohortCode(e.target.value)}
                        placeholder="From your property's wellness lead"
                        autoComplete="off"
                        style={{ letterSpacing: "0.05em" }}
                      />
                    </label>
                    <p className="text-[12px] italic text-muted mb-2">
                      Your wellness lead distributes this. Treat it like a
                      passkey for your property.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 text-[14px] text-muted italic border-l border-gold pl-4">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn w-full justify-center"
                  disabled={submitting}
                >
                  {submitting
                    ? "Sending..."
                    : showEnrol
                      ? "Send my welcome link"
                      : "Send me a sign-in link"}
                </button>
              </form>
            ) : (
              <div className="border border-line bg-cream/50 p-10">
                <div className="tracked text-gold-dark mb-3">Sign-in</div>
                <h2 className="serif italic text-3xl text-ink mb-2">
                  Check your inbox
                </h2>
                <div className="rule-gold mb-8" />
                <p className="text-[16px] leading-[1.7] text-charcoal mb-6">
                  If <strong className="text-ink">{email}</strong> is already
                  registered, a sign-in link is on its way. Click the button
                  in that email to continue your training.
                </p>
                {!showEnrol && (
                  <div className="border border-gold/40 bg-paper p-5 mb-6">
                    <div className="tracked text-gold-dark mb-2 text-[10px]">
                      First time at the Academy?
                    </div>
                    <p className="text-[14px] leading-[1.7] text-charcoal mb-4">
                      You'll need to enrol with your <em>cohort code</em>{" "}
                      first. Your wellness lead at your property has it.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setShowEnrol(true);
                        setStep("form");
                      }}
                      className="btn w-full justify-center"
                    >
                      Enrol with cohort code
                    </button>
                  </div>
                )}
                <p className="text-[14px] italic leading-[1.7] text-muted mb-6">
                  Sign-in links are valid for thirty minutes. If nothing
                  arrives in a couple of minutes, check your spam folder.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStep("form");
                    setError(null);
                  }}
                  className="tracked text-muted hover:text-ink transition-colors text-[10px]"
                >
                  ← Use a different email
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-16 py-10 border-t border-line">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="tracked text-muted">
            Regenesis Academy · v1.0 Founding
          </div>
          <div className="tracked text-muted">Private · by invitation only</div>
        </div>
      </footer>
    </main>
  );
}
