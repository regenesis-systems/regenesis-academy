import type { Property } from "@/lib/types";

const amanyara: Property = {
  code: "AMANYARA",
  name: "Amanyara",
  location: "Northwest Point, Providenciales · Turks & Caicos Islands",
  brand: "Aman",
  cohort: "Founding Cohort",
  startDate: "April 11, 2026",
};

export const PROPERTIES: Record<string, Property> = {
  AMANYARA: amanyara,
  // Legacy alias: keep the original code resolving to the same record
  // so any trainee who enrolled before the 2026-04-28 rename still finds
  // their property when they log back in.
  "AMANYARA-FOUNDING": amanyara,
};

export function getProperty(code: string): Property | null {
  const normalised = code.trim().toUpperCase();
  return PROPERTIES[normalised] ?? null;
}
