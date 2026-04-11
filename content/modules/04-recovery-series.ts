import type { Module } from "@/lib/types";

export const recoverySeriesModule: Module = {
  slug: "recovery-series",
  number: 4,
  eyebrow: "Module Four",
  title: "The Recovery Series",
  subtitle: "Neural conditioning · the case for the multi-session journey",
  readingTime: 5,
  sections: [
    {
      kind: "prose",
      body: `A single session feels remarkable. But the real transformation — the kind a guest takes home — happens when we shift them from a **one-off treatment** to a **journey of neural conditioning**.

The goal isn't to sell more sessions. The goal is to give the guest the full value of the Pod, which is only possible across three or four visits.`,
    },
    {
      kind: "pullquote",
      body: "One session relaxes you. Four sessions change your baseline.",
    },
    {
      kind: "list",
      title: "The Compound Effect",
      items: [
        "**Session 1.** The body maps the new environment. Many guests feel wonderful; some feel slightly overwhelmed by the newness. Both are normal.",
        "**Session 2.** The body recognises the entry — the scent, the warmth. The on-ramp gets shorter.",
        "**Session 3.** The body now recognises the *neural anchors* and drops into the restorative state almost instantly. Guests often say the third session is where they *really understand* what the Pod is for.",
        "**Session 4.** The nervous system has a new pathway available. The guest is **training** their baseline of stillness to stay with them after they leave.",
      ],
    },
    {
      kind: "prose",
      title: "Protocol Consistency",
      body: `Guests may want to switch experiences. Variety is fine — but repeating the same one is biologically better:`,
    },
    {
      kind: "list",
      items: [
        "**Neural pathfinding.** Repetition creates grooves. Repeating RELAX four times builds a shortcut to deep recovery.",
        "**Cellular saturation.** PEMF and infrared benefits are cumulative at a mitochondrial level.",
        "**Eliminating cognitive friction.** By session three, the breathing guidance is automatic. The drop is deeper.",
      ],
    },
    {
      kind: "callout",
      title: "The 48-Hour Cycle — The Most Important Fact",
      body: `We recommend **every other day**, not daily. Why: the afterglow lasts **24 to 48 hours**, and the body needs that window to integrate. PEMF is still stimulating cellular repair. The nervous system is still holding the lower cortisol baseline.

Coming in daily short-circuits the afterglow and reduces cumulative benefit. Every other day keeps the guest in **constant coherence** across their stay.

If you internalise one fact: **every other day, not every day**.`,
    },
    {
      kind: "list",
      title: "Single vs Series · The Comparison",
      items: [
        "**Single session:** immediate stress reduction · temporary restorative state · brief mitochondrial stimulation · a moment of quiet.",
        "**Recovery Series:** increased systemic resilience · neural plasticity (brain learns to access these states on its own) · sustained biological repair · **profound stillness anchored into baseline**.",
      ],
    },
    {
      kind: "list",
      title: "Your Talking Points",
      items: [
        `**"A workout for your inner calm."**`,
        `**"Eliminating the on-ramp — by your third visit, your body recognises the frequencies immediately."**`,
        `**"We're training your body to keep that feeling of Amanyara with you when you return home."**`,
        `**"Every other day is the sweet spot — the benefit takes 24 to 48 hours to land."**`,
      ],
    },
    {
      kind: "callout",
      title: "How to Actually Pitch It",
      body: `**The moment:** after the first session, during the Integration Conversation. Never earlier. The guest has to have *felt* the Pod first.

**The line:**

> *"Most of our guests who love their first session book into the Recovery Series for the rest of their stay. Four sessions, every other day — the cadence that lets the body really land the benefit. Would you like me to hold three more for you this week?"*

That's the whole pitch. Don't describe the science. Make one warm recommendation — then stop. **Silence closes more than words.**

If they say *"maybe later,"* the answer is: *"Of course. I'll note that you enjoyed it. Whenever you're ready."* And let it go.

If they ask about price, answer directly: *"The series is [property price] for the four sessions — a meaningful discount on singles."* Then stop again.`,
    },
    {
      kind: "prose",
      title: "If The Stay Is Only Two Nights",
      body: `Recommend **two sessions** — one on arrival, one on the morning of departure. Frame it as a **bookend** approach. Always recommend more than one. A single-session guest has not really experienced the Pod.`,
    },
  ],
  quiz: [
    {
      q: "Why do we recommend sessions every other day rather than daily?",
      options: [
        "Because the Pod needs 24 hours to reset between sessions.",
        "Because the afterglow — the physiological integration window — lasts 24 to 48 hours, and daily sessions would short-circuit it.",
        "Because we want guests to explore the resort on their off days.",
        "Because the essential oils need time to refill.",
      ],
      answer: 1,
      explain:
        "The 48-hour afterglow is the single most important biological fact in this module.",
    },
    {
      q: "When is the correct moment to introduce the Recovery Series?",
      options: [
        "At villa check-in, as part of the welcome.",
        "In the briefing before the guest's first session.",
        "After the first session, during the Integration Conversation once the guest has had 60 seconds of silence.",
        "When the guest checks out, as a suggestion for their next stay.",
      ],
      answer: 2,
      explain:
        "The guest has to have *felt* the Pod first.",
    },
    {
      q: "Why do we generally recommend repeating the SAME experience rather than switching?",
      options: [
        "Because it's cheaper for the property to keep one scent loaded.",
        "Because neural pathfinding — repetition creates grooves in the brain that let the body drop into the state faster each time.",
        "Because switching experiences causes physical side effects.",
        "Because the Pod's software only allows one experience per guest.",
      ],
      answer: 1,
      explain:
        "Repetition builds neural pathways. Variety is welcomed, but consistency is biologically superior.",
    },
    {
      q: "A guest says 'maybe later' when you offer the Recovery Series. What is the on-brand response?",
      options: [
        "Mention that the price goes up if they wait.",
        "Remind them of the benefits they will miss out on.",
        "Say 'of course, I'll note that you enjoyed it, whenever you're ready' and let it go completely.",
        "Offer a 20% discount to close the sale.",
      ],
      answer: 2,
      explain:
        "Warm acknowledgement and release. Pressure damages the brand.",
    },
    {
      q: "A guest is only staying two nights. What do you recommend?",
      options: [
        "Tell them the Recovery Series isn't for them — just a single session.",
        "Recommend two sessions — one on arrival day, one on the morning of departure — as a 'bookend' approach.",
        "Push them to do four sessions back-to-back in two days.",
        "Decline their booking because the cadence doesn't work.",
      ],
      answer: 1,
      explain:
        "Adapt the series to the stay length, but always recommend more than one session.",
    },
  ],
};
