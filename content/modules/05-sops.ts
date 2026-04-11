import type { Module } from "@/lib/types";

export const sopsModule: Module = {
  slug: "sops-essentials",
  number: 5,
  eyebrow: "Module Five",
  title: "SOPs Essentials",
  subtitle: "Daily rituals that keep the Pod flawless",
  readingTime: 6,
  sections: [
    {
      kind: "prose",
      body: `A guest walking into a beautifully prepared Pod room does not notice the preparation. A guest walking into one with a smudged touchscreen notices **immediately**, and the magic is gone.

None of these tasks are difficult. All of them matter. This module is for everyone who operates the Pod day-to-day — Engineering covers the deeper technical work in Module Six.`,
    },
    {
      kind: "callout",
      title: "The Pod You Are Working With",
      body: `The hardware at Amanyara is the **Regenesis Pod 2.7** — the current generation. Key things to know about its operation:

- **Power button:** the *illuminated* on/off button on the exterior of the Pod (your trainer will show you exactly where on Day One). It glows softly — you can find it in a dimmed room.
- **Manual controls:** a **three-dial system** on the operator tablet. The default intensity for all three dials is **70%**. Every session starts at 70% unless a guest explicitly requests something different.
- **Connectivity:** the Pod is always linked to Regenesis's protocol servers for remote updates. Do not disable or disconnect it — this is how the Pod becomes a *Living Installation*.`,
    },
    {
      kind: "callout",
      title: "The Daily Rhythm",
      body: `**Morning (before first guest):** Start-Up → Room prep → 5-min Health Check → Tablet charged → Confirm three-dial 70% default.

**Between every guest:** Spot clean (touchscreen + surfaces) → Cushion check → Room refresh → Visual of interior.

**Evening:** Final clean → Shut-Down (**illuminated power button only, never unplug**) → Tablet charging → Log closed.

**Fortnightly (every two weeks):** Olfactory refill — 10 drops of each doTERRA oil.

**Monthly:** Interior deep clean with **non-corrosive, medical-grade disinfectant only**.

**Quarterly (every three months):** Deep cleaning of intake and HVAC filters.

**Weekly:** The staff wellness calibration — a dedicated 21-minute session one member of the team takes to verify the haptic, visual, and audio sync is still perfect.`,
    },
    {
      kind: "list",
      title: "Start-Up · The First Ten Minutes",
      items: [
        "**Verify power.** Pod plugged into step-down converter, converter plugged into wall, converter switch on.",
        "**Power on** via the illuminated exterior on/off button.",
        "**Open the door** via the exterior button. Let it complete its full travel.",
        "**Inspect the interior** — dust, scuffs, cushion alignment. Clean now if needed.",
        "**Run the 5-min Health Check.** Confirm scent, audio, light pulses, somatic vibration, targeted NIR, touchscreen, three-dial response. You are the Pod's first guest of the day.",
        "**Confirm the three-dial system is at 70% default** across all three controls.",
        "**Verify the tablet** — charged, unlocked, showing the session menu.",
      ],
    },
    {
      kind: "list",
      title: "Between Guests · The Reset",
      items: [
        "**Put on white gloves.** Every time.",
        "**Spot-clean the touchscreen** with microfibre + a light medical-grade disinfectant mist. No streaks.",
        "**Wipe visible interior surfaces** — big screen, cushion edge, anywhere a previous guest may have touched.",
        "**Check the cushion.** Any mark → swap to backup immediately, send used one to housekeeping.",
        "**Refresh the room** — dim lights, quiet ambient, let the air settle.",
        "**Reset the three dials to 70% default** for the next guest.",
        "**Log the session** in the Maintenance Log.",
      ],
    },
    {
      kind: "callout",
      title: "The Cushion · Treat It Like Fine Linen",
      body: `The single surface that touches every guest for 20 uninterrupted minutes. Cleaned as part of the **monthly deep clean** with gentle steam and non-corrosive medical-grade disinfectant only.

**Any mark, stain, or residue between scheduled cleanings → swap to backup immediately.** Do not wait. The backup exists for exactly this.`,
    },
    {
      kind: "prose",
      title: "Scent Is Everything — Fortnightly Refill",
      body: `The olfactory system is the single most important signature — it's the **neural anchor** the body uses to recognise the Pod. A faint or stale scent is a Pod that has lost its most powerful tool.

**Every two weeks**, refill each active reservoir. This is less frequent than traditional aromatherapy setups because Regenesis's olfactory system is a precision burst system, not a continuous diffuser — the oils last longer but still need fortnightly topping-up to hit peak intensity.`,
    },
    {
      kind: "list",
      items: [
        "**White gloves.** Contamination is the enemy.",
        "**Unscrew the back hatch** (allen key). Support the hatch as the last screws come out.",
        "**Slide out the olfactory system.** Note scent positions before unscrewing nut lids.",
        "**Add exactly 10 drops** of the correct doTERRA oil. Mapping: **ID 1 → Lavender (RELAX) · ID 2 → Frankincense (RECONNECT) · ID 3 → Tangerine (RECHARGE)**. Remaining slots reserved for future experiences — leave empty.",
        "**doTERRA only.** Any other brand contaminates months of neural anchoring work.",
        "**Reseal, reassemble, secure the hatch** — every screw hand-tightened, no rattles.",
        "**Run a test session** to confirm each scent delivers cleanly.",
      ],
    },
    {
      kind: "callout",
      title: "Shut-Down · The One Rule You Must Not Break",
      body: `1. Confirm interior clean and cushion in place.
2. Close the Pod door via the exterior button.
3. Power off via the illuminated exterior on/off button.

**Do NOT unplug the Pod from the step-down converter.** Leave it plugged in overnight. The button is the correct shut-down — unplugging interrupts the Pod's internal maintenance cycle AND breaks its link to Regenesis's protocol update servers.

**Illuminated button only, never the plug.** The single most common new-staff mistake.`,
    },
    {
      kind: "prose",
      title: "The Maintenance Log",
      body: `Every issue, observation, guest note, and refill date goes in the **Regenesis Maintenance Log**. A rattling fan noted once is a note. Noted three times across two weeks is a service ticket. Your logs are how Regenesis spots patterns across every Pod in the world.

**Support contact:** email **support@regenesispod.com**. Live support windows: 18:00–10:00 TCI time (Bali 06:00–22:00 WITA), with an urgent window 10:00–12:00 noon TCI. Guaranteed response within 24 hours.`,
    },
    {
      kind: "pullquote",
      body: "The Pod is craftsmanship. Treat it like a Steinway, not a treadmill.",
    },
  ],
  quiz: [
    {
      q: "At the end of the day, you should:",
      options: [
        "Unplug the Pod from the step-down converter to save energy.",
        "Power off using the illuminated exterior on/off button only — never unplug.",
        "Leave the Pod running overnight for the next morning.",
        "Reset the Pod by unplugging for 60 seconds.",
      ],
      answer: 1,
      explain:
        "Illuminated power button ONLY, never unplug. Unplugging interrupts the internal maintenance cycle and breaks the Pod's link to the protocol update servers.",
    },
    {
      q: "How often is the olfactory system refilled?",
      options: ["Daily", "Every Monday", "Fortnightly (every two weeks)", "Quarterly"],
      answer: 2,
      explain:
        "Fortnightly refill — the Pod's olfactory system is a precision burst system, not a continuous diffuser, so oils last longer but still need regular topping-up.",
    },
    {
      q: "What is the default intensity setting for all three dials on the Pod's manual control system?",
      options: ["50%", "70%", "100%", "It varies per experience"],
      answer: 1,
      explain:
        "All three dials default to 70%. Every session starts at 70% unless the guest explicitly requests otherwise.",
    },
    {
      q: "For cleaning the Pod's interior surfaces, you should use:",
      options: [
        "Any household disinfectant spray.",
        "Bleach on a cloth for maximum hygiene.",
        "Non-corrosive, medical-grade disinfectant only.",
        "Warm water and soap.",
      ],
      answer: 2,
      explain:
        "Non-corrosive, medical-grade disinfectant only. Other cleaners can damage the Pod's finishes and electronics.",
    },
    {
      q: "What is the maintenance cadence for the Pod's HVAC and intake filters?",
      options: [
        "Weekly cleaning",
        "Monthly cleaning",
        "Quarterly (every three months) deep cleaning",
        "Annual cleaning",
      ],
      answer: 2,
      explain:
        "Quarterly deep cleaning of intake and HVAC filters. The monthly task is the interior deep-clean with medical-grade disinfectant — different job.",
    },
  ],
};
