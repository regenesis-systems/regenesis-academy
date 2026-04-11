import { notFound } from "next/navigation";
import { MODULES, getModule } from "@/content/modules";
import { ModuleReader } from "@/components/ModuleReader";

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();
  return <ModuleReader module={mod} />;
}
