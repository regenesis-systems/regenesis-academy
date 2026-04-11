import type { Property } from "@/lib/types";

export const PROPERTIES: Record<string, Property> = {
  "AMANYARA-FOUNDING": {
    code: "AMANYARA-FOUNDING",
    name: "Amanyara",
    location: "Northwest Point, Providenciales · Turks & Caicos Islands",
    brand: "Aman",
    cohort: "Founding Cohort",
    startDate: "April 11, 2026",
  },
};

export function getProperty(code: string): Property | null {
  const normalised = code.trim().toUpperCase();
  return PROPERTIES[normalised] ?? null;
}
