import type { Module } from "@/lib/types";

export const voiceModule: Module = {
  slug: "voice",
  number: 1,
  eyebrow: "Module One",
  title: "The Voice",
  subtitle: "How we speak about the Pod",
  readingTime: 12,
  sections: [
    {
      kind: "prose",
      body: `Before you ever touch a button on the Pod, before you explain a single feature, the thing a guest will remember is *how you made them feel*. And that feeling — whether they leave intrigued or whether they leave skeptical — lives almost entirely in the language you use.

Regenesis is a quiet brand. It does not sell by claiming. It does not shout. It does not promise miracles, and it does not over-explain. It speaks the way the Pod itself operates — with confidence, with calm, and with a patient certainty that invites the guest in rather than pushing them toward a decision.

This module is your voice. The one you will use every time a guest asks *"what is this thing?"* You do not need to memorize it word-for-word. You need to **internalize** it, so that whether you are a villa host passing a guest in the garden or a spa receptionist booking their third session, the words that come out are unmistakably, consistently **Regenesis**.`,
    },
    {
      kind: "pullquote",
      body: "You are not selling. You are inviting. The Pod does the rest.",
    },
    {
      kind: "prose",
      title: "Who the Guest Is",
      body: `The guest you will speak to at an Aman property has seen everything. They have been to every spa. They have tried every modality. They are intelligent, discerning, often quiet, and deeply attuned to nuance. They can feel enthusiasm that is performed. They can feel knowledge that is memorized rather than lived.

They are not here to be convinced. They are here to be **invited**.

Your job is not to sell them. Your job is to give them enough information to choose the experience themselves — and then to hold space for that experience to do its work.`,
    },
    {
      kind: "do-dont",
      title: "Words We Use · Words We Don't",
      dos: [
        "Experience — never *treatment*",
        "Session — never *appointment*",
        "Guest — never *customer* or *client*",
        "Journey — never *regimen* or *program*",
        "The Pod — capitalised, singular, spoken with reverence",
        "Recalibration — not *healing*",
        "Recovery — not *cure*",
        "Supports · promotes · helps the body return to —",
        "Invitation — never an *offer*",
        "Intuitive · immersive · quiet · restorative",
      ],
      donts: [
        "*Treatment* — sounds clinical, invites medical scrutiny",
        "*Therapy* — implies a medical condition being addressed",
        "*Cure · heal · fix · fight* — these make claims we cannot make",
        "*Machine · device · unit* — reduces the Pod to hardware",
        "*Customer · user · client* — transactional, cold",
        "*Revolutionary · breakthrough · game-changing* — marketing-speak, undermines trust",
        "*Definitely · guaranteed · proven* — overpromises",
        "*100% · always · everyone* — absolute claims invite legal risk",
      ],
    },
    {
      kind: "prose",
      title: "The Signature Phrases",
      body: `These are the lines you will use, often, in different forms. They are intentionally short and memorable. When in doubt, reach for one of these:`,
    },
    {
      kind: "list",
      items: [
        `**"A workout for your inner calm."** — reframes the Pod as a form of training, not a passive spa treatment.`,
        `**"Think of this as a recalibration — not a treatment."** — sets the tone and avoids medical language in one sentence.`,
        `**"The body learns the Pod. By your third session, the drop happens instantly."** — plants the Recovery Series concept without pitching it.`,
        `**"We are not giving you a moment of rest. We are training your body to keep that feeling with you."** — connects the session to lasting benefit.`,
        `**"The first session surprises you. The third one changes you."** — creates anticipation for the journey, not just the visit.`,
        `**"Eliminating the on-ramp."** — explains why repeat sessions deepen, in three words.`,
        `**"The Pod meets you where you are."** — reassures the skeptic and the veteran alike.`,
      ],
    },
    {
      kind: "prose",
      title: "Core Metaphors",
      body: `Metaphors are how Regenesis makes the invisible feel tangible. Use these consistently. A guest who hears the same metaphors from three different team members starts to feel like they've encountered a **real philosophy**, not a pitch.`,
    },
    {
      kind: "list",
      items: [
        `**Recalibration** — the nervous system being set back to its natural rhythm, the way you might re-tune an instrument.`,
        `**Anchoring** — training the body to hold the feeling after the guest leaves the Pod, the way a scent can bring back a memory years later.`,
        `**The on-ramp** — the mental resistance and settling-in that happens in the first session, which disappears by the third.`,
        `**The afterglow** — the 24 to 48 hour physiological window after each session when the body continues to integrate.`,
        `**Conditioning** — like physical training, but for the inner state. Repetition is the point.`,
      ],
    },
    {
      kind: "callout",
      title: "The Claims Boundary — Non-Negotiable",
      body: `Regenesis does not make medical claims. Ever. This is not about being cautious — it is about being **precise**. The Pod supports the body's natural recovery processes. It does not treat disease. It does not cure conditions. It does not replace medical care.

The words you use live inside this boundary:

**Say this:**
→ "Supports recovery."
→ "Promotes relaxation and restoration."
→ "Helps the body return to balance."
→ "Many guests report feeling ..."
→ "I would always suggest checking in with your doctor about anything specific."

**Never say this:**
✗ "Cures [anything]."
✗ "Treats [a diagnosis]."
✗ "Will help your [specific condition]."
✗ "Guaranteed to ..."
✗ "FDA-approved." *(The Pod is not a medical device.)*
✗ "Proven to ..."

If a guest asks whether the Pod will help a specific medical condition — back pain, insomnia, anxiety, an injury — the answer always follows this pattern:

> *"The Pod supports the body's natural recovery, and many guests report feeling [relevant benefit]. For anything specific I'd always suggest checking with your doctor — but the experience itself is safe and gentle, and you can see how your body responds."*

This sentence is your friend. Learn it. It lets you speak with warmth without crossing the line.`,
    },
    {
      kind: "prose",
      title: "Handling Skepticism",
      body: `Some guests will raise an eyebrow. They will ask if this is "woo." They will ask for evidence. They will ask *"does it actually work?"*

Do not get defensive. Do not oversell. Do not list studies. The most powerful response is **agreement and invitation**:

> *"That is fair — it is a lot of technology in one place, and it is hard to describe in words. The best thing I can do is invite you to try a single session. Most guests who come in skeptical leave curious. You do not need to believe in anything for the frequencies to do what they do."*

Then leave it. The experience is the argument.`,
    },
    {
      kind: "prose",
      title: "The Ten Questions You Will Be Asked",
      body: `These are the questions you will hear, in some form, almost every day. Below is the Regenesis answer to each — **not as a script to recite, but as a reference for the tone and substance**. Make them your own.`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"What is this thing?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"It is called the Regenesis Pod. Think of it as a sensory environment — a single immersive space that layers light, sound, vibration, scent, and grounding frequencies, all working in synchrony. The effect is something the body recognises almost immediately: a kind of deep, restorative stillness."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Is it safe?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Completely. Nothing is injected or ingested, there are no drugs or chemicals, and the door opens from the inside and the outside. We stay nearby the entire time. If anything ever feels off, you simply step out."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Will it help my [back pain / insomnia / stress / ...]?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"The Pod supports the body's natural recovery, and many guests report feeling deeply relaxed and noticeably lighter afterwards. For anything specific I'd always suggest checking in with your doctor — but the experience itself is safe and gentle, and you can see how your body responds."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"How is this different from a sauna or a massage or a flotation tank?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Those are wonderful on their own. The Pod is different because it layers several things at once — light, sound, vibration, scent, and grounding frequencies — all synchronised. It is less like any one treatment and more like an entire environment working on you at once."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"What will I feel?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"It is different for everyone, and it depends on which experience you choose. Some guests feel profoundly relaxed, almost weightless. Some feel clear and energised. Some drift into a light, dream-like state. Almost everyone tells us afterwards that it is unlike anything they have tried before."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Can I go in with a pacemaker / during pregnancy / with a heart condition?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Great question. For certain conditions we ask a few questions first and check with your doctor if needed. I'll have you fill out a short wellness form and we will go from there — always better to be sure."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Is there science behind it?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"Yes — each of the technologies inside the Pod has its own body of research: PEMF, near and far infrared, vibro-acoustics, Schumann grounding. What makes Regenesis unique is the way they are layered and synchronised, which is why many guests feel the effect is more than the sum of its parts. I can share some reading if you'd like."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Can I come every day?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"You can — and honestly, that is where it gets interesting. A single session feels wonderful. But when you come in three or four times across your stay, your body starts to recognise the frequencies and drops into the restorative state much faster. We call it the **Recovery Series** — I'd love to book you into it."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"Does it actually work?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"That is fair — it is a lot of technology in one place, and it is hard to describe in words. The best thing I can do is invite you to try a single session. Most guests who come in skeptical leave curious. You do not need to believe in anything for the frequencies to do what they do."`,
    },
    {
      kind: "script",
      role: "Guest",
      body: `"How much does it cost?"`,
    },
    {
      kind: "script",
      role: "You",
      body: `"A single session is [PROPERTY PRICE]. Most guests here choose the Recovery Series, which is [PROPERTY PRICE] — four sessions across the stay, every other day. It is designed to give the body time to really land the benefit. If you are here for more than a couple of nights, it is the one I would suggest."`,
    },
    {
      kind: "prose",
      title: "One Last Thing",
      body: `You will not sound like every other member of the Amanyara team after this module. That is the point. There is a specific Regenesis voice — **quiet, confident, unhurried, never clinical, never hyped** — and your job is to carry it consistently.

If you remember only one thing from this entire module:

**You are not selling. You are inviting. The Pod does the rest.**`,
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
        "'Recalibration not treatment' is the exact Regenesis framing: calm, precise, non-medical, and it reframes the entire experience in one sentence.",
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
        "You are not selling. You are inviting. The Pod does the rest. This is the single most important principle in this entire module.",
    },
  ],
};
