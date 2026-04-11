"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getProperty, PROPERTIES } from "@/content/properties";
import type { Trainee, Property } from "@/lib/types";

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

    const sample: Trainee = {
      id: "tr_preview" + Math.random().toString(36).slice(2, 8),
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
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/academy/"
          className="tracked text-muted hover:text-ink transition-colors inline-block mb-10"
        >
          Back to the Academy
        </Link>

        <header className="mb-10 text-center">
          <div className="tracked text-gold-dark mb-4">Preview</div>
          <h1 className="serif text-5xl md:text-6xl text-ink leading-[1.02] mb-4">
            Certificate Preview
          </h1>
          <div className="rule-gold mx-auto mb-8" />
          <p className="text-[15px] leading-[1.75] text-charcoal max-w-[56ch] mx-auto">
            This is what the Founding Cohort certificate will look like. Use
            the URL query string to change the name on it. Try{" "}
            <code className="text-gold-dark">?name=Your+Name</code> or{" "}
            <code className="text-gold-dark">
              ?name=Tav+Keen&amp;role=Co-Founder
            </code>
            .
          </p>
          <p className="text-[13px] italic text-muted mt-4">
            Current preview name: <strong>{name}</strong>
          </p>
        </header>

        {ready && trainee && property ? (
          <CertificateView trainee={trainee} property={property} />
        ) : (
          <div className="py-20 text-center tracked text-muted">Loading...</div>
        )}

        <div className="mt-16 border-t border-line pt-10 max-w-[58ch] mx-auto">
          <div className="tracked text-gold-dark mb-3">How to use this URL</div>
          <p className="text-[14px] leading-[1.7] text-charcoal mb-4">
            This preview page is not gated. Anyone with the link can see a
            sample certificate, but only with the name they pass in the query
            string. It will never appear in the submissions log because no
            trainee record is created.
          </p>
          <ul className="text-[13px] text-muted space-y-2 leading-relaxed">
            <li>
              <strong className="text-ink">Name:</strong>{" "}
              <code>?name=Firstname+Lastname</code>
            </li>
            <li>
              <strong className="text-ink">Role:</strong>{" "}
              <code>&amp;role=Villa+Host</code>
            </li>
            <li>
              <strong className="text-ink">Property:</strong>{" "}
              <code>&amp;property=AMANYARA-FOUNDING</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
