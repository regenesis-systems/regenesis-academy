import type { ModuleSection } from "@/lib/types";
import React from "react";

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;
  const patterns: Array<[RegExp, (m: RegExpMatchArray) => React.ReactNode]> = [
    [/\*\*(.+?)\*\*/, (m) => <strong key={`k${key++}`}>{m[1]}</strong>],
    [/\*(.+?)\*/, (m) => <em key={`k${key++}`}>{m[1]}</em>],
  ];
  while (remaining.length) {
    let earliest: { idx: number; match: RegExpMatchArray; render: (m: RegExpMatchArray) => React.ReactNode } | null = null;
    for (const [re, render] of patterns) {
      const m = remaining.match(re);
      if (m && m.index !== undefined) {
        if (earliest === null || m.index < earliest.idx) {
          earliest = { idx: m.index, match: m, render };
        }
      }
    }
    if (!earliest) {
      parts.push(remaining);
      break;
    }
    if (earliest.idx > 0) parts.push(remaining.slice(0, earliest.idx));
    parts.push(earliest.render(earliest.match));
    remaining = remaining.slice(earliest.idx + earliest.match[0].length);
  }
  return <>{parts}</>;
}

function Paragraphs({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i}>{renderInline(p)}</p>
      ))}
    </>
  );
}

export function SectionRenderer({ section }: { section: ModuleSection }) {
  switch (section.kind) {
    case "prose":
      return (
        <div className="prose-aman max-w-[58ch]">
          {section.title && (
            <h3 className="serif text-3xl md:text-4xl text-ink mb-2 mt-10 first:mt-0">
              {section.title}
            </h3>
          )}
          {section.title && <div className="rule-gold mb-6" />}
          {section.body && <Paragraphs text={section.body} />}
        </div>
      );
    case "pullquote":
      return (
        <div className="my-14 flex justify-center">
          <div className="max-w-[52ch] text-center">
            <div className="rule-gold mx-auto mb-6" />
            <p className="serif text-2xl md:text-3xl italic text-charcoal leading-snug">
              {section.body}
            </p>
            <div className="rule-gold mx-auto mt-6" />
          </div>
        </div>
      );
    case "list":
      return (
        <div className="prose-aman max-w-[62ch] my-6">
          {section.title && (
            <h3 className="serif text-3xl md:text-4xl text-ink mb-2 mt-10 first:mt-0">
              {section.title}
            </h3>
          )}
          {section.title && <div className="rule-gold mb-6" />}
          <ul>
            {section.items?.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ul>
        </div>
      );
    case "callout":
      return (
        <aside className="my-12 max-w-[62ch] border border-line bg-cream/50 px-8 py-10">
          {section.title && (
            <div className="mb-5">
              <div className="tracked text-gold-dark mb-2">Note</div>
              <h4 className="serif text-2xl md:text-[28px] text-ink leading-tight">
                {section.title}
              </h4>
            </div>
          )}
          {section.body && (
            <div className="prose-aman">
              <Paragraphs text={section.body} />
            </div>
          )}
        </aside>
      );
    case "do-dont":
      return (
        <div className="my-12 max-w-[68ch]">
          {section.title && (
            <>
              <h3 className="serif text-3xl md:text-4xl text-ink mb-2">
                {section.title}
              </h3>
              <div className="rule-gold mb-8" />
            </>
          )}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="tracked text-gold-dark mb-4">Do</div>
              <ul className="space-y-3">
                {section.dos?.map((d, i) => (
                  <li
                    key={i}
                    className="text-[15px] leading-relaxed text-charcoal pl-5 relative"
                  >
                    <span className="absolute left-0 top-2 w-2 h-[1px] bg-gold" />
                    {renderInline(d)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="tracked text-muted mb-4">Don&apos;t</div>
              <ul className="space-y-3">
                {section.donts?.map((d, i) => (
                  <li
                    key={i}
                    className="text-[15px] leading-relaxed text-muted pl-5 relative"
                  >
                    <span className="absolute left-0 top-2 w-2 h-[1px] bg-muted" />
                    {renderInline(d)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    case "script":
      return (
        <div className="my-4 max-w-[58ch]">
          <div className="flex gap-5 items-start">
            <div className="w-14 flex-shrink-0 pt-1">
              <div className="tracked text-gold-dark text-[10px]">{section.role}</div>
            </div>
            <div
              className={`flex-1 italic text-[15px] leading-relaxed ${
                section.role === "You" ? "text-ink" : "text-muted"
              }`}
            >
              {section.body}
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
