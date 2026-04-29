"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { verifyToken } from "@/lib/auth-api";
import { saveTrainee } from "@/lib/storage";
import type { Trainee } from "@/lib/types";

type Status = "verifying" | "success" | "error";

export default function VerifyPage() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("verifying");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) {
      setStatus("error");
      setErrorMsg("This page expects a sign-in token. Did you click the link from your inbox?");
      return;
    }
    verifyToken(token)
      .then((res) => {
        saveTrainee(res.trainee as Trainee);
        setStatus("success");
        setTimeout(() => router.push("/academy/"), 1200);
      })
      .catch((err: Error) => {
        setStatus("error");
        setErrorMsg(
          err.message === "token expired"
            ? "This sign-in link has expired. Sign-in links are valid for thirty minutes for your security."
            : err.message === "token already used"
              ? "This sign-in link has already been used. For your security, every link works only once."
              : err.message === "invalid token"
                ? "This sign-in link is not valid. It may have been mistyped or already used."
                : err.message ||
                  "Something went wrong signing you in. Please request a fresh link.",
        );
      });
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-8 md:px-16 py-10">
        <div className="max-w-6xl mx-auto">
          <Wordmark size="lg" />
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center px-8 md:px-16 py-16">
        <div className="max-w-xl w-full text-center">
          {status === "verifying" && (
            <>
              <div className="tracked text-gold-dark mb-4">Academy</div>
              <h1 className="serif italic text-3xl md:text-4xl text-ink mb-4">
                Signing you in
              </h1>
              <div className="rule-gold mb-6 mx-auto" />
              <p className="text-[16px] italic text-muted">One moment.</p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="tracked text-gold-dark mb-4">Welcome</div>
              <h1 className="serif italic text-3xl md:text-4xl text-ink mb-4">
                You're in.
              </h1>
              <div className="rule-gold mb-6 mx-auto" />
              <p className="text-[16px] italic text-muted">
                Loading your training...
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="tracked text-gold-dark mb-4">Sign-in</div>
              <h1 className="serif italic text-3xl md:text-4xl text-ink mb-6">
                We could not sign you in
              </h1>
              <div className="rule-gold mb-8 mx-auto" />
              <p className="text-[16px] leading-[1.7] text-charcoal mb-10 max-w-md mx-auto">
                {errorMsg}
              </p>
              <Link href="/" className="btn">
                Send me a fresh sign-in link
              </Link>
            </>
          )}
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
