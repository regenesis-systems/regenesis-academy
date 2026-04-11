import type { Module } from "@/lib/types";
import { voiceModule } from "./01-voice";
import { experiencesModule } from "./02-experiences";
import { guestJourneyModule } from "./03-guest-journey";
import { recoverySeriesModule } from "./04-recovery-series";
import { sopsModule } from "./05-sops";
import { emergencyModule } from "./06-emergency";

export const MODULES: Module[] = [
  voiceModule,
  experiencesModule,
  guestJourneyModule,
  recoverySeriesModule,
  sopsModule,
  emergencyModule,
];

export function getModule(slug: string): Module | undefined {
  return MODULES.find((m) => m.slug === slug);
}

export const TOTAL_READING_TIME = MODULES.reduce((a, m) => a + m.readingTime, 0);
