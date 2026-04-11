import Link from "next/link";

const HEIGHT_CLASS: Record<"sm" | "md" | "lg", string> = {
  sm: "h-5",
  md: "h-6",
  lg: "h-8",
};

type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  eyebrow?: string | null;
  align?: "left" | "center";
  href?: string;
  className?: string;
};

export function Wordmark({
  size = "md",
  eyebrow = "Academy",
  align = "left",
  href,
  className = "",
}: WordmarkProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  const content = (
    <span className={`inline-flex flex-col ${alignClass} gap-1.5 ${className}`}>
      {}
      <img
        src="/regenesis-wordmark.png"
        alt="Regenesis"
        className={`${HEIGHT_CLASS[size]} w-auto`}
      />
      {eyebrow && (
        <span className="tracked text-gold-dark leading-none">{eyebrow}</span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
}
