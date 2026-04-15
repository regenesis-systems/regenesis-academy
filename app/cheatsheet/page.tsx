"use client";

import React from "react";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { cheatsheet } from "@/content/cheatsheet";

/**
 * Tiny inline parser for the cheatsheet content file.
 * Supports **bold** and *italic*. Bold is matched first.
 */
function RichText({ text }: { text: string }) {
  if (!text) return null;
  const out: React.ReactNode[] = [];
  let key = 0;
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  for (const seg of boldParts) {
    if (!seg) continue;
    if (seg.startsWith("**") && seg.endsWith("**")) {
      out.push(<strong key={key++}>{seg.slice(2, -2)}</strong>);
      continue;
    }
    const italicParts = seg.split(/(\*[^*]+\*)/g);
    for (const sub of italicParts) {
      if (!sub) continue;
      if (sub.startsWith("*") && sub.endsWith("*")) {
        out.push(<em key={key++}>{sub.slice(1, -1)}</em>);
      } else {
        out.push(<React.Fragment key={key++}>{sub}</React.Fragment>);
      }
    }
  }
  return <>{out}</>;
}

export default function CheatSheetPage() {
  const c = cheatsheet;

  return (
    <main className="cheatsheet-root">
      <div className="toolbar">
        <div className="toolbar-inner">
          <Link href="/academy/" className="toolbar-link">
            Back to Academy
          </Link>
          <button
            type="button"
            className="print-btn"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>

      <article className="sheet">
        <header className="sheet-header">
          <div className="sheet-header-left">
            <Wordmark size="md" eyebrow={null} />
            <div className="sheet-eyebrow">{c.meta.eyebrow}</div>
          </div>
          <div className="sheet-header-right">
            <div className="sheet-meta">{c.meta.cohort}</div>
            <div className="sheet-meta-sub">{c.meta.edition}</div>
          </div>
        </header>

        <section className="hero">
          <div className="rule-gold-short" aria-hidden />
          <p className="hero-pull">
            <RichText text={c.hero.line1} />
            <br />
            <RichText text={c.hero.line2} />
          </p>
          <div className="rule-gold-short" aria-hidden />
        </section>

        <section className="block block-aman">
          <div className="block-eyebrow">{c.amanWords.eyebrow}</div>
          <p className="aman-quote">&ldquo;{c.amanWords.quote}&rdquo;</p>
          <div className="aman-line">
            <span className="aman-line-label">{c.amanWords.lineLabel}</span>
            <span className="aman-line-body">
              <RichText text={c.amanWords.line} />
            </span>
          </div>
        </section>

        <section className="block">
          <div className="block-eyebrow">{c.experiences.eyebrow}</div>
          <div className="exp-grid">
            {c.experiences.items.map((item) => (
              <div className="exp" key={item.num}>
                <div className="exp-num">{item.num}</div>
                <div className="exp-name">{item.name}</div>
                <div className="exp-scent">{item.scent}</div>
                <p className="exp-feel">{item.feel}</p>
                <p className="exp-when">{item.when}</p>
              </div>
            ))}
          </div>
          <p className="exp-rule">
            <RichText text={c.experiences.rule} />
          </p>
        </section>

        <section className="block">
          <div className="block-eyebrow">{c.journey.eyebrow}</div>
          <div className="journey-row">
            {c.journey.roles.map((r) => (
              <div className="journey-col" key={r.role}>
                <div className="journey-role">{r.role}</div>
                <div className="journey-verb">{r.verb}</div>
                <p className="journey-say">{r.say}</p>
              </div>
            ))}
          </div>
          <div className="journey-timing">
            <span>
              <RichText text={c.journey.timingInside} />
            </span>
            <span className="timing-dot" aria-hidden>
              ·
            </span>
            <span>
              <RichText text={c.journey.timingRoom} />
            </span>
          </div>
        </section>

        <section className="emergence">
          <div className="emergence-eyebrow">{c.emergence.eyebrow}</div>
          <h2 className="emergence-title">{c.emergence.title}</h2>
          <p className="emergence-lede">{c.emergence.lede}</p>
          <div className="emergence-grid">
            <div className="emergence-col do">
              <div className="emergence-label">{c.emergence.doLabel}</div>
              <ul>
                {c.emergence.do.map((line, i) => (
                  <li key={i}>
                    <RichText text={line} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="emergence-col dont">
              <div className="emergence-label">{c.emergence.dontLabel}</div>
              <ul>
                {c.emergence.dont.map((line, i) => (
                  <li key={i}>
                    <RichText text={line} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="block block-series">
          <div className="block-eyebrow">{c.series.eyebrow}</div>
          <p className="series-when">{c.series.when}</p>
          <p className="series-line">
            <RichText text={c.series.line} />
          </p>
          <div className="series-rules">
            {c.series.rules.map((rule, i) => (
              <div key={i}>
                <strong>{rule.title}</strong>{" "}
                <RichText text={rule.body} />
              </div>
            ))}
          </div>
        </section>

        <section className="block">
          <div className="block-eyebrow">{c.words.eyebrow}</div>
          <div className="words-grid">
            <div className="words-col use">
              <div className="words-label">{c.words.useLabel}</div>
              <ul>
                {c.words.use.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="words-col avoid">
              <div className="words-label">{c.words.avoidLabel}</div>
              <ul>
                {c.words.avoid.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="block lines">
          {c.lines.map((line, i) => (
            <div className="lines-item" key={i}>
              <div className="lines-eyebrow">{line.eyebrow}</div>
              <p>
                <RichText text={line.body} />
              </p>
            </div>
          ))}
        </section>

        <section className="block">
          <div className="block-eyebrow">{c.qa.eyebrow}</div>
          <div className="qa-grid">
            {c.qa.items.map((item, i) => (
              <div className="qa-item" key={i}>
                <div className="qa-q">{item.q}</div>
                <p className="qa-a">
                  <RichText text={item.a} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="block">
          <div className="block-eyebrow">{c.phrases.eyebrow}</div>
          <ul className="phrases-list">
            {c.phrases.items.map((phrase, i) => (
              <li key={i}>{phrase}</li>
            ))}
          </ul>
        </section>

        <section className="contact-strip" aria-label="Who to call">
          {c.contact.map((item, i) => (
            <div className="contact-item" key={i}>
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">{item.value}</div>
              <div className="contact-note">{item.note}</div>
            </div>
          ))}
        </section>

        <footer className="sheet-footer">
          <span>{c.footer.left}</span>
          <span className="sheet-footer-center">
            <RichText text={c.footer.center} />
          </span>
          <span>{c.footer.right}</span>
        </footer>
      </article>

      <style>{`
        :root {
          --sheet-max: 880px;
        }

        .cheatsheet-root {
          min-height: 100vh;
          background:
            radial-gradient(1200px 600px at 50% -10%, rgba(184, 152, 102, 0.10), transparent 60%),
            linear-gradient(180deg, #eee6d4 0%, #e2d9c2 100%);
          padding: 32px 20px 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .toolbar {
          width: 100%;
          max-width: var(--sheet-max);
        }
        .toolbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
        }
        .toolbar-link {
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .toolbar-link:hover { color: var(--ink); }
        .print-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.7rem 1.4rem;
          border: 1px solid var(--ink);
          background: var(--ink);
          color: var(--paper);
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .print-btn:hover { background: transparent; color: var(--ink); }

        .sheet {
          width: 100%;
          max-width: var(--sheet-max);
          background: var(--paper);
          padding: 56px 64px;
          box-shadow:
            0 1px 0 rgba(0, 0, 0, 0.04),
            0 20px 60px rgba(26, 26, 26, 0.18),
            0 8px 20px rgba(26, 26, 26, 0.10);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .sheet::before,
        .sheet::after {
          content: "";
          position: absolute;
          width: 28px;
          height: 28px;
          border: 1px solid var(--gold);
          opacity: 0.5;
        }
        .sheet::before {
          top: 22px;
          left: 22px;
          border-right: none;
          border-bottom: none;
        }
        .sheet::after {
          bottom: 22px;
          right: 22px;
          border-left: none;
          border-top: none;
        }

        /* HEADER */
        .sheet-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--line);
        }
        .sheet-header-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .sheet-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold-dark);
          font-weight: 500;
        }
        .sheet-header-right {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .sheet-meta {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.1rem;
          font-style: italic;
          color: var(--charcoal);
          line-height: 1.1;
        }
        .sheet-meta-sub {
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* HERO */
        .hero {
          text-align: center;
          padding: 16px 0 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .rule-gold-short {
          width: 60px;
          height: 1px;
          background: var(--gold);
        }
        .hero-pull {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.7rem;
          line-height: 1.3;
          color: var(--ink);
          font-weight: 300;
          letter-spacing: -0.005em;
          margin: 0;
        }
        .hero-pull em { font-style: italic; color: var(--gold-dark); }

        /* BLOCKS */
        .block { padding: 0; }
        .block-eyebrow {
          font-size: 0.62rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold-dark);
          font-weight: 500;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--stone);
          margin-bottom: 16px;
        }

        /* AMAN WORDS */
        .block-aman {
          background: var(--cream);
          padding: 24px 28px;
          border: 1px solid var(--line);
          border-left: 2px solid var(--gold);
        }
        .block-aman .block-eyebrow {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 12px;
        }
        .aman-quote {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.0625rem;
          line-height: 1.55;
          color: var(--charcoal);
          margin: 0 0 16px;
          font-style: italic;
        }
        .aman-line {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 14px;
          border-top: 1px dashed var(--line);
        }
        .aman-line-label {
          font-size: 0.58rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .aman-line-body {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1rem;
          line-height: 1.45;
          color: var(--ink);
        }

        /* EXPERIENCES */
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--stone);
          border-bottom: 1px solid var(--stone);
        }
        .exp { padding: 18px 22px; }
        .exp + .exp { border-left: 1px solid var(--stone); }
        .exp-num {
          font-size: 0.55rem;
          letter-spacing: 0.22em;
          color: var(--muted);
          font-variant-numeric: tabular-nums;
          margin-bottom: 4px;
        }
        .exp-name {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.6rem;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 2px;
        }
        .exp-scent {
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 12px;
        }
        .exp-feel {
          font-size: 0.85rem;
          line-height: 1.45;
          color: var(--charcoal);
          margin: 0 0 6px;
        }
        .exp-when {
          font-size: 0.78rem;
          line-height: 1.4;
          color: var(--muted);
          font-style: italic;
          margin: 0;
        }
        .exp-rule {
          font-size: 0.85rem;
          color: var(--charcoal);
          margin: 14px 0 0;
          text-align: center;
          font-style: italic;
        }
        .exp-rule strong { color: var(--ink); font-style: normal; }

        /* JOURNEY */
        .journey-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 22px;
        }
        .journey-col + .journey-col {
          padding-left: 22px;
          border-left: 1px solid var(--stone);
        }
        .journey-role {
          font-size: 0.6rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 4px;
        }
        .journey-verb {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.25rem;
          color: var(--ink);
          font-style: italic;
          margin-bottom: 8px;
          line-height: 1.1;
        }
        .journey-say {
          font-size: 0.84rem;
          line-height: 1.5;
          color: var(--charcoal);
          margin: 0;
        }
        .journey-timing {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--stone);
          font-size: 0.85rem;
          color: var(--muted);
        }
        .journey-timing strong { color: var(--ink); font-weight: 600; }
        .timing-dot { color: var(--gold); font-weight: 700; }

        /* EMERGENCE */
        .emergence {
          background: var(--ink);
          color: var(--paper);
          padding: 36px 40px;
          position: relative;
        }
        .emergence::before,
        .emergence::after {
          content: "";
          position: absolute;
          left: 40px;
          right: 40px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }
        .emergence::before { top: 14px; }
        .emergence::after { bottom: 14px; }
        .emergence-eyebrow {
          font-size: 0.62rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .emergence-title {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.85rem;
          font-style: italic;
          color: var(--paper);
          margin: 0 0 12px;
          font-weight: 300;
          line-height: 1.1;
        }
        .emergence-lede {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #d9d2c1;
          margin: 0 0 20px;
          max-width: 580px;
        }
        .emergence-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .emergence-label {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .emergence-col.dont .emergence-label { color: #d98e6a; }
        .emergence-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .emergence-col li {
          font-size: 0.86rem;
          line-height: 1.5;
          color: #e8e1ce;
          padding-left: 16px;
          position: relative;
        }
        .emergence-col li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 11px;
          width: 10px;
          height: 1px;
          background: var(--gold);
        }
        .emergence-col.dont li::before { background: #d98e6a; }
        .emergence-col em { color: var(--paper); font-style: italic; }

        /* SERIES */
        .block-series {
          background: var(--cream);
          border: 1px solid var(--line);
          border-left: 2px solid var(--gold);
          padding: 24px 28px;
        }
        .block-series .block-eyebrow {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 10px;
        }
        .series-when {
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0 0 12px;
        }
        .series-line {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.1rem;
          line-height: 1.45;
          color: var(--charcoal);
          margin: 0 0 16px;
          padding-left: 16px;
          border-left: 1px solid var(--gold);
        }
        .series-rules {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          font-size: 0.78rem;
          line-height: 1.45;
          color: var(--charcoal);
          padding-top: 12px;
          border-top: 1px dashed var(--line);
        }
        .series-rules > div { padding-left: 14px; border-left: 1px solid var(--stone); }
        .series-rules strong { color: var(--ink); display: block; margin-bottom: 2px; }
        .series-rules em { color: var(--ink); }

        /* WORDS */
        .words-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .words-col {
          padding: 14px 18px;
          border: 1px solid var(--stone);
        }
        .words-col.use {
          background: rgba(184, 152, 102, 0.05);
          border-color: var(--gold);
        }
        .words-label {
          font-size: 0.6rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 8px;
          padding-bottom: 5px;
          border-bottom: 1px solid var(--stone);
        }
        .words-col.avoid .words-label { color: var(--muted); }
        .words-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .words-col li {
          font-size: 0.85rem;
          line-height: 1.4;
          color: var(--charcoal);
        }
        .words-col.avoid li {
          color: var(--muted);
          text-decoration: line-through;
          text-decoration-color: rgba(107, 102, 89, 0.4);
        }

        /* LINES */
        .lines {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .lines-eyebrow {
          font-size: 0.6rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 6px;
        }
        .lines-item p {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1rem;
          line-height: 1.45;
          color: var(--charcoal);
          margin: 0;
        }
        .lines-item em { color: var(--ink); }

        /* QA */
        .qa-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 28px;
        }
        .qa-q {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.1rem;
          font-style: italic;
          color: var(--ink);
          margin-bottom: 4px;
          line-height: 1.2;
        }
        .qa-a {
          font-size: 0.82rem;
          line-height: 1.5;
          color: var(--charcoal);
          margin: 0;
          padding-left: 14px;
          border-left: 1px solid var(--gold);
        }
        .qa-a em { color: var(--charcoal); font-style: italic; }

        /* PHRASES */
        .phrases-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 28px;
        }
        .phrases-list li {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.05rem;
          line-height: 1.4;
          color: var(--charcoal);
          font-style: italic;
          padding-left: 16px;
          position: relative;
        }
        .phrases-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 10px;
          height: 1px;
          background: var(--gold);
        }

        /* CONTACT */
        .contact-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          padding: 18px 0;
          border-top: 1px solid var(--stone);
          border-bottom: 1px solid var(--stone);
        }
        .contact-item { padding: 0 18px; }
        .contact-item + .contact-item { border-left: 1px solid var(--stone); }
        .contact-label {
          font-size: 0.58rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 4px;
        }
        .contact-value {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 1.05rem;
          color: var(--ink);
          font-style: italic;
          line-height: 1.15;
          margin-bottom: 2px;
        }
        .contact-note {
          font-size: 0.65rem;
          color: var(--muted);
          line-height: 1.3;
        }

        /* FOOTER */
        .sheet-footer {
          padding-top: 16px;
          border-top: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .sheet-footer-center {
          letter-spacing: 0;
          text-transform: none;
        }
        .sheet-footer-center em {
          font-family: var(--font-cormorant), Georgia, serif;
          font-style: italic;
          font-size: 0.95rem;
          color: var(--gold-dark);
        }

        /* MOBILE */
        @media (max-width: 720px) {
          .cheatsheet-root { padding: 16px 12px 40px; }
          .sheet { padding: 32px 24px; gap: 28px; }
          .sheet::before, .sheet::after { width: 18px; height: 18px; top: 12px; left: 12px; }
          .sheet::after { top: auto; left: auto; bottom: 12px; right: 12px; }
          .hero-pull { font-size: 1.35rem; }
          .emergence { padding: 28px 24px; }
          .emergence::before, .emergence::after { left: 24px; right: 24px; }
          .emergence-title { font-size: 1.5rem; }
          .exp-grid,
          .journey-row,
          .series-rules,
          .words-grid,
          .lines,
          .phrases-list,
          .emergence-grid,
          .qa-grid,
          .contact-strip {
            grid-template-columns: 1fr;
          }
          .exp + .exp,
          .journey-col + .journey-col,
          .contact-item + .contact-item {
            border-left: none;
            border-top: 1px solid var(--stone);
            padding-left: 0;
            padding-top: 16px;
            margin-top: 16px;
          }
          .series-rules > div {
            border-left: none;
            border-top: 1px solid var(--stone);
            padding-left: 0;
            padding-top: 10px;
          }
          .sheet-header,
          .sheet-footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
            align-items: center;
          }
          .sheet-header-right { text-align: center; }
        }

        /* PRINT — let the browser handle it */
        @media print {
          @page { margin: 14mm; }
          html, body { background: #ffffff !important; }
          .cheatsheet-root {
            background: #ffffff !important;
            padding: 0 !important;
            min-height: 0 !important;
          }
          .toolbar { display: none !important; }
          .sheet {
            box-shadow: none !important;
            max-width: none !important;
            padding: 0 !important;
            gap: 24px !important;
          }
          .sheet::before, .sheet::after { display: none !important; }
          .emergence,
          .block-aman,
          .block-series,
          .words-col.use {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .block, .emergence, .contact-strip {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
