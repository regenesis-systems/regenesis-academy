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
      body: `The Pod holds **three distinct journeys**, each a different arrangement of the Pod's seven modalities working in synchrony. Your job: know which to recommend to which guest in a single sentence.`,
    },
    {
      kind: "callout",
      title: "The Seven Modalities of Impact",
      body: `Every experience draws from the same underlying stack. What changes between experiences is the arrangement, the intensity, and the scent. **Memorise these names** — they are how Regenesis describes its own technology:

1. **PEMF** — Bioenergetic frequencies for cellular repair.
2. **Rhythmic Visual Priming** — Precision light pulses for neural entrainment.
3. **Immersive Audio** — Spatial soundscapes that bypass mental chatter.
4. **Somatic Vibration** — Deep physical resonance via internal haptics.
5. **Targeted NIR** — Brain-specific near-infrared (positioned above the head) to increase oxygenation and blood flow, pulsed in sync with PEMF.
6. **Schumann Resonance Generators** — A grounded frequency floor aligned with the Earth's natural rhythm.
7. **Precision Olfactory** — Neural anchoring via specific scent bursts.

The scent is the **neural anchor** — the sensory signature the body recognises on the second visit and drops into much faster by the third. Each experience is paired with a doTERRA essential oil.`,
    },
    {
      kind: "prose",
      title: "RELAX · Lavender",
      body: `**The deepest drop.** For the guest who arrived wound tight, hasn't slept properly in weeks, or has shoulders you can see from across the room.

**What it feels like:** a slow, gentle descent. Many guests describe it as the most complete rest they've had in months — a kind of conscious sleep.

**When to recommend:** almost every new guest. Safest first experience, easiest "yes," most likely to convert a skeptic. The 20-minute Relax protocol is Regenesis's flagship session.`,
    },
    {
      kind: "pullquote",
      body: "'This is the one most guests start with — the quietest journey we offer.'",
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
      title: "RECHARGE · Tangerine",
      body: `**The bright reset.** For the red-eye traveller, the jet-lagged guest, anyone flat and wanting to come back to themselves.

**What it feels like:** restored rather than sedated — returning energy without the edge of caffeine.

**When to recommend:** jet lag, afternoon slump, or any guest who wants to finish the day lifted rather than wound down.`,
    },
    {
      kind: "pullquote",
      body: "'This is the one for jet lag — the bright one.'",
    },
    {
      kind: "list",
      title: "A Simple Decision Rule",
      items: [
        "**Exhausted, stressed, or can't sleep** → RELAX",
        "**Meditation, retreat, or feeling off-center** → RECONNECT",
        "**Jet lag, low energy, wants to feel bright** → RECHARGE",
        "**Unsure?** Default to RELAX.",
      ],
    },
    {
      kind: "callout",
      title: "If A Guest Asks About Other Experiences",
      body: `The Pod's olfactory system has capacity for more. Those slots are reserved for future experiences in development. The on-brand answer:

> *"The Pod is what we call a Living Installation — constantly updated with new protocols validated by our research partners. We began with the three that cover the widest range of guests. More are in development, and we'll share them when they're ready."*

Warm, honest, brief. Never invent a benefit for an experience that isn't live.`,
    },
    {
      kind: "prose",
      title: "Recommending, Not Prescribing",
      body: `You are **recommending**, not prescribing.

**Say:** *"I'd suggest starting with RELAX — it's the 20-minute flagship session, and the one most guests fall in love with on their first visit."*

**Don't say:** *"You need RECHARGE — it will cure your jet lag."*`,
    },
  ],
  quiz: [
    {
      q: "A guest arrives visibly wound-up after a long travel day, mentions they haven't slept well in a week. Which experience do you suggest first?",
      options: ["RELAX", "RECHARGE", "RECONNECT", "It doesn't matter"],
      answer: 0,
      explain:
        "RELAX is the deepest-drop session, paired with Lavender — the safest, most universally effective first experience for an exhausted guest.",
    },
    {
      q: "A guest says they came to Amanyara to 'disconnect from the noise' and mentions they have been meditating daily. Best experience to suggest?",
      options: ["RELAX", "RECHARGE", "RECONNECT", "Whichever they prefer"],
      answer: 2,
      explain:
        "RECONNECT (Frankincense) is the stillness journey — exactly the match for a meditator or anyone craving quiet.",
    },
    {
      q: "Which term correctly describes the Pod's use of light pulses for neural entrainment?",
      options: [
        "Stroboscopic Light Therapy",
        "Rhythmic Visual Priming",
        "Chromotherapy",
        "LED Stimulation",
      ],
      answer: 1,
      explain:
        "Regenesis's sanctioned term is *Rhythmic Visual Priming* — one of the seven modalities of impact. Don't call it 'stroboscopic' — that's the old technical term.",
    },
    {
      q: "A guest asks whether the Pod has other experiences beyond the three currently offered. What is the correct on-brand answer?",
      options: [
        "Make up details about future experiences to keep them interested.",
        "Tell them it's a secret and we can't discuss it.",
        "Say the Pod is a Living Installation continuously updated, and more experiences are in development — we will share when ready.",
        "Offer them a discount to distract from the question.",
      ],
      answer: 2,
      explain:
        "Living Installation language + 'more in development, shared when ready' is the approved line.",
    },
    {
      q: "A guest with mild jet lag wants to 'feel like themselves again' before dinner tonight. Best recommendation?",
      options: ["RELAX", "RECONNECT", "RECHARGE", "Skip the Pod today"],
      answer: 2,
      explain:
        "RECHARGE (Tangerine) is the bright reset — designed exactly for jet lag and low-energy afternoons.",
    },
  ],
};
