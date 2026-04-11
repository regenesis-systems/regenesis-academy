import type { Module } from "@/lib/types";

export const experiencesModule: Module = {
  slug: "experiences",
  number: 2,
  eyebrow: "Module Two",
  title: "The Three Experiences",
  subtitle: "One Pod · three distinct journeys",
  readingTime: 8,
  sections: [
    {
      kind: "prose",
      body: `The Regenesis Pod is not a single thing the guest does. It is a single environment that holds **three distinct journeys**, each one a different arrangement of the Pod's underlying technologies — light, sound, vibration, scent, and grounding frequencies — all synchronised toward a different outcome.

Your job in this module is to know each experience well enough to recommend the right one to the right guest in a single sentence. Not to recite what each technology does, but to know **who each experience is for, what it feels like, and the phrase you'll use to invite the guest into it**.`,
    },
    {
      kind: "callout",
      title: "How the Pod Layers",
      body: `Every experience draws from the same underlying stack — **PEMF, near and far infrared, stroboscopic light, vibro-acoustics, Schumann grounding, binaural beats, chromotherapy, and olfactory stimulation**. What changes from experience to experience is the arrangement, the intensity, and the *scent* — which is the single most recognisable signature the body remembers.

Each experience is paired with one of our signature doTERRA essential oils. The scent is the **neural anchor** — the sensory thread the body will recognise the second time, and fall into the state much faster by the third.`,
    },
    {
      kind: "prose",
      title: "Experience One · RELAX",
      body: `**Scent: Lavender** · the deepest drop, the quietest journey.

**Who it is for.** The guest who arrived wound tight. The executive who has not truly stopped in weeks. The traveller who has crossed five time zones. The guest whose shoulders you can see from across the room.

**What it feels like.** A slow, gentle descent. The body softens. Thought slows. Many guests describe it as *the most complete rest they've had in months* — a kind of conscious sleep. It is the session most guests fall in love with on their first visit.

**When to recommend it.** As the first experience for almost every new guest. It is the safest bet, the easiest "yes," and the session most likely to convert a skeptic.`,
    },
    {
      kind: "pullquote",
      body: "For RELAX: 'This is the one most guests start with. It is the quietest journey we offer — the one your body doesn't need to work for.'",
    },
    {
      kind: "prose",
      title: "Experience Two · RECONNECT",
      body: `**Scent: Frankincense** · the stillness session, the soul journey.

**Who it is for.** The guest on a spiritual retreat. The meditator. The guest who mentions they've been feeling "scattered" or "not quite themselves." The couple who have been arguing on holiday and need to land again. The guest who talks about craving silence.

**What it feels like.** A deep, grounding stillness — something closer to meditation than sleep. Frankincense is the scent most often described as *sacred* by guests who notice scent at all. The experience tends to leave people *more themselves* — quieter, clearer, less reactive.

**When to recommend it.** When a guest mentions meditation, stillness, retreat, or any language around "reconnecting" with themselves. It is the experience that matches the inner work.`,
    },
    {
      kind: "pullquote",
      body: "For RECONNECT: 'This is the one for when the outside world has gotten loud. It is the quietest experience we offer, and the one guests describe as sacred.'",
    },
    {
      kind: "prose",
      title: "Experience Three · RECHARGE",
      body: `**Scent: Tangerine** · the lift, the reset, the bright journey.

**Who it is for.** The guest who arrived on a red-eye. The traveller with jet lag. The guest who is technically on holiday but emotionally still at work. The guest whose energy is flat and who wants to *come back to themselves* quickly. The guest who needs to feel bright before a dinner, a meeting, or an afternoon on the water.

**What it feels like.** A bright reset. Tangerine is the most uplifting scent in the lineup, and the experience is designed to leave the guest feeling *restored rather than sedated* — a sense of returning energy without the edge of caffeine.

**When to recommend it.** For guests battling jet lag, for the afternoon slump, or for anyone who wants to finish their stay feeling lifted rather than wound down.`,
    },
    {
      kind: "pullquote",
      body: "For RECHARGE: 'This is the one for jet lag, or for when you need to come back to yourself quickly. It is the bright one.'",
    },
    {
      kind: "prose",
      title: "A Simple Decision Rule",
      body: `If you find yourself hesitating over which experience to recommend, use this:`,
    },
    {
      kind: "list",
      items: [
        "**Guest says they're exhausted, stressed, or can't sleep** → RELAX.",
        "**Guest mentions meditation, retreat, or feeling off-center** → RECONNECT.",
        "**Guest has jet lag, low energy, or wants to feel bright** → RECHARGE.",
        "**When genuinely unsure**, default to RELAX. It is the experience that works for the widest range of guests and is the best first impression.",
      ],
    },
    {
      kind: "callout",
      title: "A Note on What's Coming",
      body: `You may notice the olfactory system physically holds capacity for additional scents. These slots are reserved for **future experiences** currently in development at Regenesis. If a guest asks, the answer is: *"We began with the three experiences that cover the widest range of guests. There are more in development — we will share them when they are ready."* Warm, honest, and brief. Never invent a benefit for an experience that isn't live yet.`,
    },
    {
      kind: "prose",
      title: "Recommending, Not Prescribing",
      body: `One final note on tone. You are **recommending** an experience, not prescribing a treatment. The difference shows up in a single word:

**Say:** *"I would suggest starting with RELAX — it is the one most guests fall in love with on their first visit."*

**Don't say:** *"You need RECHARGE — it will cure your jet lag."*

The guest is choosing. You are advising. Keep it light.`,
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
      q: "Which experience is paired with Frankincense and described as the 'sacred' or 'meditation-like' journey?",
      options: ["RELAX", "RECHARGE", "RECONNECT", "All three equally"],
      answer: 2,
      explain:
        "RECONNECT (Frankincense) is the stillness journey — the one guests on retreat gravitate to.",
    },
    {
      q: "A guest asks whether the Pod has other experiences beyond the three currently offered. What is the correct on-brand answer?",
      options: [
        "Make up details about future experiences to keep them interested.",
        "Tell them it's a secret and we can't discuss it.",
        "Say we began with the three that cover the widest range of guests, and more are in development — we will share when ready.",
        "Offer them a discount to distract from the question.",
      ],
      answer: 2,
      explain:
        "Warm, honest, brief. Never invent benefits for experiences that aren't live yet. 'More in development, shared when ready' is the approved line.",
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
