import type { Module } from "@/lib/types";

export const experiencesModule: Module = {
  slug: "experiences",
  number: 2,
  eyebrow: "Module Two",
  title: "The Three Experiences",
  subtitle: "One Pod · three distinct journeys",
  readingTime: 5,
  sections: [
    {
      kind: "prose",
      body: `The Pod holds **three distinct journeys**, each a different arrangement of the Pod's eight modalities working in synchrony. Your job: know which to recommend to which guest in a single sentence.`,
    },
    {
      kind: "callout",
      title: "The Eight Modalities of Impact",
      body: `Every experience draws from the same underlying stack. What changes between experiences is the arrangement, the intensity, and the scent. These are how Regenesis describes its own technology:

1. **PEMF:** bioenergetic frequencies for cellular repair.
2. **Pulsed Light Guidance:** precision light pulses for neural entrainment.
3. **Immersive Audio:** spatial soundscapes that bypass mental chatter.
4. **Somatic Vibration:** deep physical resonance via internal haptics.
5. **Near Infra-Red:** brain-specific light (positioned above the head) to increase oxygenation and blood flow, pulsed in sync with PEMF.
6. **Schumann Resonance Generators:** a grounded frequency floor aligned with the Earth's natural rhythm.
7. **Precision Olfactory:** neural anchoring via specific scent bursts.
8. **Spatial Design Integration:** organic form and immersive enclosure engineered for physiological ease.

The scent is the **neural anchor**, the sensory signature the body recognises on the second visit and drops into much faster by the third. Each experience is paired with natural essential oils.`,
    },
    {
      kind: "prose",
      title: "RELAX · Lavender & Frankincense",
      body: `**The deepest drop.** For the guest who arrived wound tight, hasn't slept properly in weeks, just stepped off a long flight, or are just feeling stressed.

**What it feels like:** a slow, gentle descent. Many guests describe it as the most complete rest they've had in months. A kind of conscious sleep.

**When to recommend:** almost every new guest. Safest first experience, easiest "yes," most likely to convert a skeptic. The right call for jet lag and travel exhaustion. The 20-minute Relax protocol is Regenesis' flagship session.`,
    },
    {
      kind: "pullquote",
      body: "'This is the one most guests start with, the quietest journey we offer.'",
    },
    {
      kind: "prose",
      title: "RECONNECT · Frankincense",
      body: `**The stillness session.** For the guest on retreat, the meditator, the guest who mentions feeling "scattered" or "not quite themselves."

**What it feels like:** something closer to meditation than sleep. Frankincense is the scent most often described as *sacred*. Guests leave quieter, clearer, less reactive.

**When to recommend:** whenever a guest mentions meditation, stillness, or reconnecting with themselves.`,
    },
    {
      kind: "pullquote",
      body: "'This is the one for when the outside world has gotten loud.'",
    },
    {
      kind: "prose",
      title: "RECHARGE · Tangerine & Peppermint",
      body: `**The Recharge session.** Designed to elevate energy, sharpen focus, and bring you into a clear, driven state, ready for whatever comes next.

**What it feels like:** clear, lifted, awake without the sharp edge of caffeine. Many guests describe it as the cleanest hour they've had in weeks.

**When to recommend:** before creative work, before a presentation, before a meeting that matters. Or any guest mentioning they want to focus or get into flow.`,
    },
    {
      kind: "pullquote",
      body: "'This is the one when you have something to write or build.'",
    },
    {
      kind: "list",
      title: "A Simple Decision Rule",
      items: [
        "**Exhausted, jet-lagged, can't sleep** → RELAX",
        "**Meditation, retreat, or feeling off-center** → RECONNECT",
        "**Focusing, creating, before something important** → RECHARGE",
        "**Unsure?** Default to RELAX.",
      ],
    },
    {
      kind: "callout",
      title: "If A Guest Asks About Other Experiences",
      body: `The Pod's olfactory system has capacity for more. Those slots are reserved for future experiences in development. The on-brand answer:

> *"The Pod is designed as an evolving environment. Continuously refined with new protocols validated by our research partners. We began with the three experiences that cover the widest range of guests. More are in development, and we'll share them when they're ready."*

Warm, honest, brief. Never invent a benefit for an experience that isn't live.`,
    },
    {
      kind: "prose",
      title: "Recommending, Not Prescribing",
      body: `You are **recommending**, not prescribing.

**Say:** *"I'd suggest starting with RELAX. It's the 20-minute flagship session, and the one most guests fall in love with on their first visit."*

**Don't say:** *"You need RECHARGE. It will make you a more creative person."*`,
    },
  ],
  quiz: [
    {
      q: "A guest arrives visibly wound-up after a long travel day, mentions they haven't slept well in a week. Which experience do you suggest first?",
      options: ["RELAX", "RECHARGE", "RECONNECT", "It doesn't matter"],
      answer: 0,
      explain:
        "RELAX is the deepest-drop session, paired with Lavender. The safest, most universally effective first experience for an exhausted or jet-lagged guest.",
    },
    {
      q: "A guest says they came to Amanyara to 'disconnect from the noise' and mentions they have been meditating daily. Best experience to suggest?",
      options: ["RELAX", "RECHARGE", "RECONNECT", "Whichever they prefer"],
      answer: 2,
      explain:
        "RECONNECT (Frankincense) is the stillness journey. Exactly the match for a meditator or anyone craving quiet.",
    },
    {
      q: "Which term correctly describes the Pod's use of light pulses for neural entrainment?",
      options: [
        "Stroboscopic Light Therapy",
        "Pulsed Light Guidance",
        "Chromotherapy",
        "LED Stimulation",
      ],
      answer: 1,
      explain:
        "Regenesis' sanctioned term is *Pulsed Light Guidance*. One of the eight modalities of impact. Don't call it 'stroboscopic'. That's the old technical term.",
    },
    {
      q: "A guest asks whether the Pod has other experiences beyond the three currently offered. What is the correct on-brand answer?",
      options: [
        "Make up details about future experiences to keep them interested.",
        "Tell them it's a secret and we can't discuss it.",
        "Say the Pod is designed as an evolving environment, continuously refined, and more experiences are in development. We will share when ready.",
        "Offer them a discount to distract from the question.",
      ],
      answer: 2,
      explain:
        "Evolving environment language + 'more in development, shared when ready' is the approved line.",
    },
    {
      q: "A guest mentions they have a creative project they want to sit down with later in the day and asks for the right Pod session beforehand. Best recommendation?",
      options: ["RELAX", "RECONNECT", "RECHARGE", "Skip the Pod today"],
      answer: 2,
      explain:
        "RECHARGE (Tangerine) is the Recharge session. Designed to elevate energy, sharpen focus, and bring the guest into a clear, driven state for whatever comes next.",
    },
  ],
};
