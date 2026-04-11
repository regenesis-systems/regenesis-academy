"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enroll, loadTrainee, submitEnrollment } from "@/lib/storage";
import { getProperty } from "@/content/properties";

const ROLES = [
  "Spa Reception",
  "Spa Therapist",
  "Villa Host",
  "Front Office",
  "Engineering",
  "Management",
  "Other",
];

export default function EnrollmentPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Spa Reception",
    code: "AMANYARA-FOUNDING",
  });
  const [error, setError] = useState<string | null>(null);
  const [existing, setExisting] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const t = loadTrainee();
    if (t) setExisting(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const property = getProperty(form.code);
    if (!property) {
      setError(
        "That property code was not recognised. Please check with your trainer.",
      );
      return;
    }
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email to continue.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const trainee = enroll({
      name: form.name,
      email: form.email,
      role: form.role,
      propertyCode: form.code,
    });
    void submitEnrollment(trainee);
    router.push("/academy/");
  }

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-8 md:px-16 py-10">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <div className="serif text-2xl text-ink tracking-[0.02em]">
              Regenesis
            </div>
            <div className="tracked text-gold-dark mt-1">Academy</div>
          </div>
          {mounted && existing && (
            <Link
              href="/academy/"
              className="tracked text-muted hover:text-ink transition-colors"
            >
              Continue →
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
              Over the next six modules, you will be guided through the Pod
              experience, operating principles, guest journey, and core
              standards required to deliver Regenesis with confidence and care.
            </p>
            <p className="text-[17px] leading-[1.75] text-charcoal max-w-[54ch] mb-8">
              Each module concludes with a short assessment. Upon successful
              completion of the full programme, you will receive a personalised
              certificate recognising you as a Certified Regenesis Pod
              Concierge.
            </p>
            <p className="text-[17px] leading-[1.75] text-charcoal max-w-[54ch]">
              Take your time. The Academy is designed for mastery, not speed.
            </p>
          </div>

          <div className="md:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="border border-line bg-cream/50 p-10"
            >
              <div className="tracked text-gold-dark mb-3">Enrol</div>
              <h2 className="serif text-3xl text-ink mb-2">
                Begin your certification
              </h2>
              <div className="rule-gold mb-8" />

              <label className="block mb-6">
                <div className="tracked text-muted mb-2 text-[10px]">
                  Your full name
                </div>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="As you would like it on the certificate"
                />
              </label>

              <label className="block mb-6">
                <div className="tracked text-muted mb-2 text-[10px]">
                  Email address
                </div>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@aman.com"
                />
              </label>

              <label className="block mb-6">
                <div className="tracked text-muted mb-2 text-[10px]">
                  Your role
                </div>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mb-8">
                <div className="tracked text-muted mb-2 text-[10px]">
                  Property code
                </div>
                <input
                  type="text"
                  required
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value })}
                  placeholder="AMANYARA-FOUNDING"
                  style={{ letterSpacing: "0.05em" }}
                />
              </label>

              {error && (
                <div className="mb-6 text-[14px] text-muted italic border-l border-gold pl-4">
                  {error}
                </div>
              )}

              <button type="submit" className="btn w-full justify-center">
                Begin the Academy
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-16 py-10 border-t border-line">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="tracked text-muted">
            Regenesis Academy · v0.1 Founding
          </div>
          <div className="tracked text-muted">Private · by invitation only</div>
        </div>
      </footer>
    </main>
  );
}
