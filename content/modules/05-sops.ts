import type { Module } from "@/lib/types";

export const sopsModule: Module = {
  slug: "sops-essentials",
  number: 5,
  eyebrow: "Module Five",
  title: "SOPs Essentials",
  subtitle: "Daily rituals that keep the Pod flawless",
  readingTime: 5,
  sections: [
    {
      kind: "prose",
      body: `A guest walking into a beautifully prepared Pod room does not notice the preparation. A guest walking into one with a smudged touchscreen notices **immediately**, and the magic is gone.

None of these tasks are difficult. All of them matter. This module is for everyone who operates the Pod day-to-day — Engineering covers the deeper technical work in Module Six.`,
    },
    {
      kind: "callout",
      title: "The Daily Rhythm",
      body: `**Morning (before first guest):** Start-Up → Room prep → 5-min Health Check → Tablet charged.

**Between every guest:** Spot clean (touchscreen + surfaces) → Cushion check → Room refresh → Visual of interior.

**Evening:** Final clean → Shut-Down (**power button only, never unplug**) → Tablet charging → Log closed.

**15th and 30th of each month:** Cushion steam-clean with Aman housekeeping.

**Every Monday:** Olfactory refill — 10 drops of each doTERRA oil.`,
    },
    {
      kind: "list",
      title: "Start-Up · The First Ten Minutes",
      items: [
        "**Verify power.** Pod plugged into step-down converter, converter plugged into wall, converter switch on.",
        "**Power on** via the hidden exterior on/off button.",
        "**Open the door** via the hidden exterior button. Let it complete its full travel.",
        "**Inspect the interior** — dust, scuffs, cushion alignment. Clean now if needed.",
        "**Run the 5-min Health Check.** Confirm scent, audio, lights, transducers, touchscreen. You are the Pod's first guest of the day.",
        "**Verify the tablet** — charged, unlocked, showing the session menu.",
      ],
    },
    {
      kind: "list",
      title: "Between Guests · The Reset",
      items: [
        "**Put on white gloves.** Every time.",
        "**Spot-clean the touchscreen** with microfibre + a light Windex mist. No streaks.",
        "**Wipe visible interior surfaces** — big screen, cushion edge, anywhere a previous guest may have touched.",
        "**Check the cushion.** Any mark → swap to backup immediately, send used one to housekeeping.",
        "**Refresh the room** — dim lights, quiet ambient, let the air settle.",
        "**Log the session** in the Maintenance Log.",
      ],
    },
    {
      kind: "callout",
      title: "The Cushion · Treat It Like Fine Linen",
      body: `The single surface that touches every guest for 30 uninterrupted minutes. Cleaned **twice a month (15th & 30th)** by Aman housekeeping with gentle steam, backup cushion swapped in during cleaning.

**Any mark, stain, or residue between scheduled cleanings → swap to backup immediately.** Do not wait. The backup exists for exactly this.`,
    },
    {
      kind: "prose",
      title: "Scent Is Everything",
      body: `The olfactory system is the single most important signature — it's the **neural anchor** the body uses to recognise the Pod. A faint or stale scent is a Pod that has lost its most powerful tool.

**Every Monday**, refill if the Pod has been running continuously.`,
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
3. Power off via the hidden exterior on/off button.

**Do NOT unplug the Pod from the step-down converter.** Leave it plugged in overnight. The button is the correct shut-down — unplugging interrupts the internal maintenance cycle.

**Power button only, never the plug.** The single most common new-staff mistake.`,
    },
    {
      kind: "prose",
      title: "The Maintenance Log",
      body: `Every issue, observation, guest note, and refill date goes in the **Regenesis Maintenance Log**. A rattling fan noted once is a note. Noted three times across two weeks is a service ticket. Your logs are how Regenesis spots patterns across every Pod in the world.`,
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
        "Power off using the exterior on/off button only — never unplug.",
        "Leave the Pod running overnight for the next morning.",
        "Reset the Pod by unplugging for 60 seconds.",
      ],
      answer: 1,
      explain:
        "Power button ONLY, never unplug. Unplugging interrupts the internal maintenance cycle.",
    },
    {
      q: "How often is the olfactory system refilled if the Pod runs continuous sessions?",
      options: ["Daily", "Every Monday", "Once a month", "Only when scent is noticeably weaker"],
      answer: 1,
      explain:
        "Weekly refill, every Monday, 10 drops of each doTERRA oil.",
    },
    {
      q: "A cushion shows a small mark on April 3rd. The scheduled cleaning is April 15th. What do you do?",
      options: [
        "Wait until the 15th — the schedule is the schedule.",
        "Swap to the backup cushion immediately and send the used one to housekeeping for cleaning.",
        "Try to wipe the mark off with Windex.",
        "Cancel bookings until the cushion is clean.",
      ],
      answer: 1,
      explain:
        "The backup cushion exists exactly for this. Hygiene is never on a schedule.",
    },
    {
      q: "When adding essential oils during an olfactory refill, you should use:",
      options: [
        "Any high-quality essential oil brand of similar scent.",
        "doTERRA oils only, in the exact quantity and mapping specified.",
        "A blend of doTERRA and other premium brands for variety.",
        "Whichever oils the spa team already has in stock.",
      ],
      answer: 1,
      explain:
        "doTERRA only. Other brands contaminate the neural anchor the guest's body has learned to recognise.",
    },
    {
      q: "The Regenesis Maintenance Log exists primarily to:",
      options: [
        "Create paperwork for the management team.",
        "Protect the property from liability claims.",
        "Track patterns across every Pod globally so Regenesis can fix issues before they become problems.",
        "Record which staff are using the Pod.",
      ],
      answer: 2,
      explain:
        "The log is an early-warning system for the entire Regenesis fleet.",
    },
  ],
};
