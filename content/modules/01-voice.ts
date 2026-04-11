import type { Module } from "@/lib/types";

export const voiceModule: Module = {
  slug: "voice",
  number: 1,
  eyebrow: "Module One",
  title: "The Voice",
  subtitle: "How we speak about the Pod",
  readingTime: 6,
  sections: [
    {
      kind: "prose",
      body: `Before you ever touch a button, the thing a guest remembers is *how you made them feel*. That feeling lives almost entirely in the language you use.

Regenesis is a quiet brand. It does not shout, does not promise miracles, does not over-explain. It speaks with calm, patient certainty — and invites the guest in rather than pushing them.`,
    },
    {
      kind: "pullquote",
      body: "You are not selling. You are inviting. The Pod does the rest.",
    },
    {
      kind: "do-dont",
      title: "Words We Use · Words We Don't",
      dos: [
        "**Experience** — never *treatment*",
        "**Session** — never *appointment*",
        "**Guest** — never *customer*",
        "**Journey** — never *regimen*",
        "**The Pod** — capitalised, reverent",
        "**Recalibration** — not *healing*",
        "**Supports · promotes · helps the body return to —**",
        "**Invitation** — never an *offer*",
      ],
      donts: [
        "*Treatment · therapy* — clinical, invites medical scrutiny",
        "*Cure · heal · fix · fight* — claims we can't make",
        "*Machine · device · unit* — reduces the Pod to hardware",
        "*Customer · user · client* — transactional",
        "*Revolutionary · breakthrough · game-changing* — marketing-speak",
        "*Definitely · guaranteed · proven · 100%* — overpromising",
      ],
    },
    {
      kind: "list",
      title: "Signature Phrases",
      items: [
        `**"A workout for your inner calm."**`,
        `**"Think of this as a recalibration — not a treatment."**`,
        `**"The body learns the Pod. By your third session, the drop happens instantly."**`,
        `**"We're not giving you a moment of rest. We're training your body to keep that feeling with you."**`,
        `**"The first session surprises you. The third one changes you."**`,
      ],
    },
    {
      kind: "list",
      title: "Core Metaphors",
      items: [
        "**Recalibration** — the nervous system re-tuning to its natural rhythm.",
        "**Anchoring** — training the body to hold the feeling after they leave.",
        "**The on-ramp** — the initial settling-in that disappears by session three.",
        "**The afterglow** — the 24–48 hour window after each session when the body integrates.",
        "**Conditioning** — training, but for the inner state. Repetition is the point.",
      ],
    },
    {
      kind: "callout",
      title: "The Claims Boundary — Non-Negotiable",
      body: `The Pod **supports** the body's natural recovery. It does not treat, cure, or replace medical care. Ever.

**Say:** *"Supports recovery" · "Promotes relaxation" · "Many guests report feeling..." · "I'd always suggest checking in with your doctor."*

**Never say:** *"Cures..." · "Treats..." · "Will help your [condition]" · "Guaranteed" · "FDA-approved" · "Proven to..."*

If a guest asks whether the Pod will help a specific medical condition, use this sentence:

> *"The Pod supports the body's natural recovery, and many guests report feeling [relevant benefit]. For anything specific I'd always suggest checking with your doctor — but the experience itself is safe and gentle, and you can see how your body responds."*

Learn this line. It is your friend in every clinical conversation.`,
    },
    {
      kind: "prose",
      title: "Handling Skepticism",
      body: `Some guests will ask *"does it actually work?"* Don't defend. Don't oversell. Use **agreement and invitation**:

> *"That's fair — it's a lot of technology in one place, and hard to describe in words. The best thing I can do is invite you to try a single session. Most guests who come in skeptical leave curious. You don't need to believe in anything for the frequencies to do what they do."*

Then leave it. The experience is the argument.`,
    },
    {
      kind: "prose",
      title: "The Questions You'll Hear",
      body: `Below are the answers to the questions guests ask most often. Use these as a reference for tone — make them your own.`,
    },
    { kind: "script", role: "Guest", body: `"What is this thing?"` },
    {
      kind: "script",
      role: "You",
      body: `"It's called the Regenesis Pod — a sensory environment that layers light, sound, vibration, scent, and grounding frequencies, all in synchrony. The body recognises it almost immediately as a kind of deep, restorative stillness."`,
    },
    { kind: "script", role: "Guest", body: `"Is it safe?"` },
    {
      kind: "script",
      role: "You",
      body: `"Completely. Nothing injected, nothing ingested. The door opens from the inside at any moment, and we stay nearby the entire time."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Will it help my back pain / insomnia / stress?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"The Pod supports the body's natural recovery, and many guests report feeling deeply relaxed and noticeably lighter. For anything specific I'd suggest checking with your doctor — but the experience is safe and gentle, and you can see how your body responds."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"How is this different from a sauna or a massage?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Those are wonderful on their own. The Pod is different because it layers several things at once — light, sound, vibration, scent, grounding frequencies — all synchronised. Less like any one treatment, more like an entire environment working on you."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"What will I feel?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Different for everyone. Some guests feel weightless, some feel clear and bright, some drift into a dream-like state. Almost everyone says it's unlike anything they've tried."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Can I come every day?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"You can — and that's where it gets interesting. A single session is wonderful, but when you come in three or four times across your stay, your body starts to recognise the frequencies and drops in much faster. We call it the **Recovery Series** — I'd love to book you in."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Does it actually work?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Fair question. The best thing I can do is invite you to try a single session. You don't need to believe in anything for the frequencies to do what they do."`,
    },
    {
      kind: "prose",
      title: "One Last Thing",
      body: `There is a specific Regenesis voice — **quiet, confident, unhurried, never clinical, never hyped** — and your job is to carry it.

If you remember only one line from this entire module: **you are not selling. You are inviting. The Pod does the rest.**`,
    },
  ],
  quiz: [
    {
      q: "A guest asks: 'Will this fix my back pain?' Which response is on-brand and within the claims boundary?",
      options: [
        "Yes, many of our guests have had their back pain cured completely.",
        "The Pod supports the body's natural recovery, and many guests report feeling noticeably lighter. For anything specific I'd always suggest checking in with your doctor.",
        "It is clinically proven to treat back pain.",
        "We cannot answer that — you will just have to try it and see.",
      ],
      answer: 1,
      explain:
        "The Pod never makes medical claims. Support language + 'check with your doctor' is the safe, warm, on-brand answer.",
    },
    {
      q: "Which of these words should you NEVER use to describe what the Pod does?",
      options: ["Experience", "Session", "Treatment", "Recalibration"],
      answer: 2,
      explain:
        "*Treatment* is clinical and invites medical claims. We use *experience*, *session*, and *recalibration* instead.",
    },
    {
      q: "A skeptical guest asks 'is this actually scientifically proven?' What is the best response?",
      options: [
        "List studies and cite research papers to convince them.",
        "Acknowledge the fair concern and invite them into a single session.",
        "Insist firmly that it works and they will see for themselves.",
        "Tell them the Pod is probably not for them.",
      ],
      answer: 1,
      explain:
        "Agreement and invitation — never defense or oversell. The experience is the argument.",
    },
    {
      q: "Which phrase is most on-brand for Regenesis?",
      options: [
        "This will definitely solve your stress problem.",
        "Think of this as a recalibration — not a treatment.",
        "It is the most advanced wellness breakthrough ever created.",
        "The device works on your customer's body.",
      ],
      answer: 1,
      explain:
        "'Recalibration not treatment' reframes the entire experience in one sentence.",
    },
    {
      q: "What is the core purpose of the Voice?",
      options: [
        "To convince skeptical guests that the Pod works.",
        "To sell as many sessions as possible on the first visit.",
        "To invite the guest in with calm confidence and let the experience do the work.",
        "To make the Pod sound revolutionary and unique.",
      ],
      answer: 2,
      explain:
        "You are not selling. You are inviting. The Pod does the rest.",
    },
  ],
};
