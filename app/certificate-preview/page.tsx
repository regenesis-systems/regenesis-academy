"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getProperty, PROPERTIES } from "@/content/properties";
import type { Trainee, Property } from "@/lib/types";
import { Wordmark } from "@/components/Wordmark";

const CertificateView = dynamic(
  () => import("@/components/Certificate").then((m) => m.CertificateView),
  {
    ssr: false,
    loading: () => (
      <div className="tracked text-muted py-20 text-center">
        Preparing preview certificate...
      </div>
    ),
  },
);

export default function CertificatePreviewPage() {
  const [ready, setReady] = useState(false);
  const [trainee, setTrainee] = useState<Trainee | null>(null);
  const [property, setProperty] = useState<Property | null>(null);
  const [name, setName] = useState("Sample Staff Member");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qName = params.get("name")?.trim();
    const qRole = params.get("role")?.trim() || "Spa Reception";
    const qProperty = (
      params.get("property")?.trim() || "AMANYARA-FOUNDING"
    ).toUpperCase();

    const displayName = qName && qName.length > 0 ? qName : "Sample Staff Member";
    setName(displayName);

    const prop =
      getProperty(qProperty) ?? PROPERTIES["AMANYARA-FOUNDING"];
    setProperty(prop);

    const hex = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 16).toString(16),
    ).join("");
    const sample: Trainee = {
      id: "tr_" + hex,
      name: displayName,
      email: "preview@example.com",
      role: qRole,
      propertyCode: prop.code,
      enrolledAt: new Date().toISOString(),
      progress: {},
      finalScore: 95,
      certificateIssuedAt: new Date().toISOString(),
    };
    setTrainee(sample);
    setReady(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-paper">
      <header className="px-8 md:px-16 py-8 border-b border-line">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Wordmark size="md" />
          <Link
            href="/"
            className="tracked text-muted hover:text-ink transition-colors"
          >
            Back to enrolment
          </Link>
        </div>
      </header>

      <section className="flex-1 px-8 md:px-16 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="tracked text-gold-dark mb-3">Preview</div>
            <h1 className="serif text-3xl md:text-4xl text-ink mb-3">
              Certificate of Completion
            </h1>
            <div className="rule-gold mx-auto mb-5" />
            <p className="text-[14px] leading-[1.7] text-muted max-w-[52ch] mx-auto italic">
              Preview rendered for <strong className="text-ink not-italic">{name}</strong>.
              No trainee record is created.
            </p>
          </div>

          {ready && trainee && property ? (
            <CertificateView trainee={trainee} property={property} />
          ) : (
            <div className="py-20 text-center tracked text-muted">Loading...</div>
          )}
        </div>
      </section>

      <footer className="px-8 md:px-16 py-8 border-t border-line">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="tracked text-muted">
            Regenesis Academy · Preview
          </div>
          <div className="tracked text-muted">Private</div>
        </div>
      </footer>
    </main>
  );
}
