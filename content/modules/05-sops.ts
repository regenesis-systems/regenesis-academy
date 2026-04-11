import type { Module } from "@/lib/types";

export const sopsModule: Module = {
  slug: "sops-essentials",
  number: 5,
  eyebrow: "Module Five",
  title: "SOPs Essentials",
  subtitle: "Daily rituals that keep the Pod flawless",
  readingTime: 10,
  sections: [
    {
      kind: "prose",
      body: `A guest who walks into a beautifully prepared Pod room does not notice the preparation. A guest who walks into a Pod room with a smudge on the touchscreen or a stale scent notices **immediately** — and the magic is gone before the session has started.

This module is the daily rhythm that keeps the Pod in the state a guest expects: spotless, fragrant, silent, ready. None of these tasks are difficult. All of them matter. The Pod is a piece of craftsmanship, and like any piece of craftsmanship it requires a quiet, consistent ritual of care.

If you are in the Engineering or Maintenance team, Module Six covers the deeper technical work and emergency protocols. This module is for **everyone who operates the Pod day-to-day**.`,
    },
    {
      kind: "callout",
      title: "The Daily Rhythm · A Simple Map",
      body: `**Morning (before the first guest):**
→ Pod Start-Up
→ Room Preparation
→ 5-minute Health Check (test session)
→ Tablet charged and session menu ready

**Between every guest:**
→ Spot cleaning (touchscreen, visible surfaces)
→ Cushion check
→ Room refresh (air, ambient sound, soft lighting)
→ Quick visual of the interior

**Evening (after the last guest):**
→ Final interior clean
→ Pod Shut-Down (*power button only — never unplug*)
→ Tablet on charge
→ Maintenance log closed

**Twice a month (15th and 30th):**
→ Cushion steam-clean with the Aman housekeeping team

**Every Monday:**
→ Olfactory refill — 10 drops of each doTERRA oil`,
    },
    {
      kind: "prose",
      title: "Start-Up · The First Ten Minutes",
      body: `The Pod does not wake up alone. Every morning before the first guest, someone on the team walks the Pod through its start-up ritual.`,
    },
    {
      kind: "list",
      items: [
        "**Verify power.** The Pod is plugged into its step-down converter. The converter is plugged into the wall. The converter switch is on.",
        "**Power on.** Press the hidden exterior on/off button (on the bottom lip of the Pod, by the maintenance hatch). Wait for the Pod to come to life fully before opening the door.",
        "**Open the door.** Use the hidden exterior door button. Step back and let the door complete its full travel.",
        "**Inspect the interior.** Look for dust, scuffs, marks, or any visual distraction. Check the cushion — it should be clean, aligned, and smooth. If anything is off, clean now.",
        "**Run the Health Check.** A 5-minute test session. During this run, confirm the scent is delivering, the audio is clean, the lights and transducers are working, and the touchscreen is responsive. *You are the Pod's first guest of the day.*",
        "**Verify the tablet.** Charged, unlocked, and showing the session menu ready for the first guest to choose.",
      ],
    },
    {
      kind: "prose",
      title: "Between Guests · The Reset",
      body: `The reset between guests is short — usually 10 to 15 minutes — but it is the moment that makes the Pod feel untouched when the next guest arrives. Treat every reset as though a Michelin inspector is about to walk in.`,
    },
    {
      kind: "list",
      items: [
        "**Put on white gloves.** Every single time. Guests notice clean hands.",
        "**Spot-clean the touchscreen** with a microfibre cloth lightly dampened with Windex. Dry with a clean section. No streaks, no fingerprints.",
        "**Wipe down any visible interior surfaces** — the big screen, the cushion edge, anywhere a previous guest may have touched.",
        "**Check the cushion.** If it shows any mark, stain, or residue, swap to the backup cushion and send the used one to the Aman housekeeping team for steam cleaning.",
        "**Refresh the room.** Dim the lighting, lower any ambient sound to a quiet baseline, let the air settle. The room should feel *newly entered* by the next guest.",
        "**Log the session** in the Regenesis Maintenance Log. Notes, issues, guest feedback — anything the next shift should know.",
      ],
    },
    {
      kind: "callout",
      title: "The Cushion · Treat It Like Fine Linen",
      body: `The Pod's cushion is the single surface that touches every guest for 30 uninterrupted minutes. It is the most important piece of hygiene in the entire operation, and it is also the piece most likely to be neglected because it looks fine to a casual glance.

**The rule:** the cushion is **cleaned twice a month — on the 15th and the 30th — by the Aman housekeeping team**, and immediately replaced with the backup cushion during cleaning.

**If you see any mark, stain, smell, or residue between scheduled cleanings, swap it out immediately.** Do not wait for the 15th. The backup cushion exists exactly for this.

When cleaning, use **gentle steam only**, at a safe heat setting to protect both the fabric and the memory foam. Ensure the cushion is completely dry before placing it back into the Pod.`,
    },
    {
      kind: "prose",
      title: "Scent Is Everything",
      body: `The olfactory system is the single most important signature of the Regenesis experience — it is the **neural anchor** the body uses to recognise the Pod from one session to the next. A Pod with a faint, stale, or mixed scent is a Pod that has lost its most powerful tool.

**Every Monday**, if the Pod has been running continuously, the olfactory system is refilled. It is a ten-minute ritual.`,
    },
    {
      kind: "list",
      items: [
        "**Wear white gloves.** Contamination is the enemy.",
        "**Unscrew the back hatch** using the allen key. Support the hatch as the final screws come out — it should not fall.",
        "**Gently slide out the olfactory system.** Note the position of each scent before you unscrew any nut lids.",
        "**Add exactly 10 drops** of the correct doTERRA oil to each active scent hole. The current mapping is: **ID 1 → Lavender (RELAX), ID 2 → Frankincense (RECONNECT), ID 3 → Tangerine (RECHARGE)**. The remaining slots are reserved for future experiences — leave them empty.",
        "**Only doTERRA oils.** Only these oils. Using any other brand or any other blend contaminates the system and undoes months of neural anchoring work.",
        "**Reseal each nut lid carefully.** Slide the olfactory system back into place. Confirm all pipes and cables are still connected.",
        "**Secure the back hatch.** Every screw hand-tightened. No rattles.",
        "**Run a test session** to confirm each scent delivers cleanly.",
      ],
    },
    {
      kind: "callout",
      title: "Shut-Down · The One Rule You Must Not Break",
      body: `At the end of the day:

1. Confirm the interior is clean and the cushion is in place for tomorrow.
2. Close the Pod door using the exterior door button.
3. Power off the Pod using the hidden exterior on/off button.

**Do NOT unplug the Pod from the step-down converter.** Ever. Leave it plugged in overnight. Powering down via the button is the correct shut-down — unplugging interrupts the Pod's internal maintenance cycle and can cause system issues the next morning.

This is the single most common mistake new staff make. Commit it to memory: **power button only, never the plug**.`,
    },
    {
      kind: "prose",
      title: "The Maintenance Log",
      body: `Every issue, every observation, every guest note, every refill date goes into the **Regenesis Maintenance Log**. Not because a bureaucrat needs paperwork, but because the log is how Regenesis back in Bali can spot patterns across every Pod in the world and fix them before they become problems.

A rattling fan noted once is a note. A rattling fan noted three times across two weeks is a service ticket. Your log entries are how we catch the second one.

**Log every:** olfactory refill, cushion clean, any guest feedback on the experience, any issue with any subsystem, any emergency release activation, any unusual behaviour.`,
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
        "Power button ONLY, never unplug. Unplugging interrupts the internal maintenance cycle and is the most common new-staff mistake.",
    },
    {
      q: "How often is the olfactory system refilled if the Pod runs continuous sessions?",
      options: ["Daily", "Every Monday", "Once a month", "Only when scent is noticeably weaker"],
      answer: 1,
      explain:
        "Weekly refill, every Monday, 10 drops of each doTERRA oil. The scent is the neural anchor — it must stay strong and distinct.",
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
        "The backup cushion exists exactly for this. Hygiene is non-negotiable and the schedule is a minimum, not a maximum.",
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
        "doTERRA only. Using other brands contaminates the neural anchor the guest's body has learned to recognise, and undoes months of conditioning work.",
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
        "The log is an early-warning system for the entire Regenesis fleet. A small issue logged today is how we prevent a major failure somewhere next month.",
    },
  ],
};
