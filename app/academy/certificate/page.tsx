"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { loadTrainee } from "@/lib/storage";
import { getProperty } from "@/content/properties";
import type { Trainee, Property } from "@/lib/types";

const CertificateView = dynamic(
  () => import("@/components/Certificate").then((m) => m.CertificateView),
  { ssr: false, loading: () => <div className="tracked text-muted py-20 text-center">Preparing your certificate…</div> },
);

export default function CertificatePage() {
  const router = useRouter();
  const [trainee, setTrainee] = useState<Trainee | null>(null);
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const t = loadTrainee();
    if (!t) {
      router.replace("/");
      return;
    }
    if (!t.certificateIssuedAt || !t.finalScore || t.finalScore < 80) {
      router.replace("/academy/");
      return;
    }
    setTrainee(t);
    setProperty(getProperty(t.propertyCode));
  }, [router]);

  if (!trainee || !property) {
    return (
      <div className="px-6 py-20 text-center">
        <div className="tracked text-muted">Loading…</div>
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

        <header className="mb-14 text-center">
          <div className="tracked text-gold-dark mb-4">
            Congratulations
          </div>
          <h1 className="serif text-5xl md:text-7xl text-ink leading-[1.02] mb-4">
            You are certified.
          </h1>
          <div className="rule-gold mx-auto mb-8" />
          <p className="text-[17px] leading-[1.75] text-charcoal max-w-[52ch] mx-auto">
            Welcome to the Founding Cohort, the first team in the world to
            complete the Regenesis Academy. Your certificate is below. Download
            it, keep it, share it. You have earned your place as a Certified
            Regenesis Pod Concierge.
          </p>
        </header>

        <CertificateView trainee={trainee} property={property} />
      </div>
    </div>
  );
}
