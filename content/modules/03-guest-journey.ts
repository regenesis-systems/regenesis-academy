import type { Module } from "@/lib/types";

export const guestJourneyModule: Module = {
  slug: "guest-journey",
  number: 3,
  eyebrow: "Module Three",
  title: "The Guest Journey",
  subtitle: "A choreography, not a checklist",
  readingTime: 7,
  sections: [
    {
      kind: "prose",
      body: `A Regenesis session doesn't begin when the guest enters the Pod. It begins when they first hear about it — from a villa host, front office, or spa receptionist — and ends in the hour afterwards when they're sitting quietly on a terrace.

Three teams touch this arc. If each team knows its part and hands off cleanly, the guest experiences it as **one story**.`,
    },
    {
      kind: "pullquote",
      body: "The session is 30 minutes. The experience is a full afternoon.",
    },
    {
      kind: "list",
      title: "The Journey at a Glance",
      items: [
        "**Discovery** — first mention (villa host, front office, spa).",
        "**Booking** — commits to a session or the Recovery Series.",
        "**Arrival** — welcomed into the Pod room.",
        "**Preparation** — brief, waiver, orientation.",
        "**Session** — the 30-minute experience.",
        "**Emergence** — the quiet moment just after. Sacred.",
        "**Integration** — the hour after. Where the Recovery Series conversation happens.",
        "**Return** — next session booked.",
      ],
    },
    {
      kind: "callout",
      title: "The Villa Host · Plant the Seed",
      body: `You are the first touch. Your job is not to explain — it's to make them curious enough to ask at the spa.

**The line:** *"There's something we've just introduced that you might enjoy — it's called the Regenesis Pod. It's the first one at any Aman destination in the world. I'd suggest mentioning it at the spa — they can walk you through it properly."*

That's it. Exclusive, warm, clean handoff. Don't try to explain PEMF.`,
    },
    {
      kind: "callout",
      title: "The Front Office · The Conversion",
      body: `You usually book the session. The structure: **exclusivity → single → series → soft close.** Never pitch the series first.

**The line:** *"The Regenesis Pod is one of the experiences we'd really recommend this stay. It's the first at any Aman property globally. A single session is wonderful, but most of our guests here choose the **Recovery Series** — four sessions across the stay, every other day. Would you like me to pencil the first session in now?"*`,
    },
    {
      kind: "callout",
      title: "The Spa Reception · The Welcome",
      body: `The most important ten minutes in the whole journey. Everything after is shaped by the tone you set here.

**The Welcome (2 min):** Greet warmly by name. Offer water or tea. Speak more softly than normal — the room should feel *already half a session in*.

**The Brief (5 min):** *"You'll be in the Pod about 30 minutes. The door closes but it isn't sealed — you can open it from the inside any time. Inside you'll notice light, sound, a gentle vibration through the cushion, and the scent of [experience]. You don't need to do anything. The Pod does the work. Close your eyes and let your body meet it."*

Confirm the experience booked. First-timers default to **RELAX** unless they have a strong preference. Complete the waiver if not done.

**The Entry (3 min):** Invite them to remove shoes. Help them settle. Start the experience. **Then leave them alone.** Close the door softly.`,
    },
    {
      kind: "prose",
      title: "During the Session",
      body: `Stay within earshot, not hovering. Know where the Manual Release is (Module Six). **Set a quiet alarm** so you're present in the room as the session ends — the guest should never emerge to an empty room.`,
    },
    {
      kind: "callout",
      title: "The Emergence · 90 Seconds That Matter Most",
      body: `When the door opens, the guest is in a **liminal state**. How you treat them in the next ninety seconds decides whether that state carries forward or evaporates.

**Do:** be present quietly, keep lights low, offer water without asking, say *"Take a moment. There's no rush."* Let them leave on their own timing.

**Don't:** rush in with *"so, how was it?!"*, turn the lights up, hand them a feedback form, or start pitching.

**Give at least 60 seconds of silence** after they sit up. Then speak, gently.`,
    },
    {
      kind: "prose",
      title: "The Integration Conversation",
      body: `Now — and only now — ask how it was and open the Recovery Series door. One warm observation, then stop.`,
    },
    {
      kind: "pullquote",
      body: "'Most of our guests who love their first session book into the Recovery Series for the rest of their stay. Would you like me to hold three more for you this week?'",
    },
    {
      kind: "prose",
      body: `That's the whole pitch. Don't describe the science. Don't list benefits. Make one warm recommendation and stop.

If they say *"maybe later,"* the answer is: *"Of course. I'll note that you enjoyed it. Whenever you're ready."* Let it go. The Pod has planted its own seed.`,
    },
    {
      kind: "prose",
      title: "Before They Leave",
      body: `When you say goodbye, give them something to notice:

> *"Drink plenty of water this afternoon, take it gently, and notice how you feel this evening and tomorrow. The Pod keeps working for about 48 hours after the session — that's when your body is actually integrating the benefit."*

This primes them to perceive the afterglow, explains the cadence, and makes them an active participant.`,
    },
  ],
  quiz: [
    {
      q: "The villa host's role in the Guest Journey is to:",
      options: [
        "Explain PEMF, infrared, and the full science of the Pod in detail.",
        "Plant the seed by mentioning the Pod and handing off to the spa team.",
        "Close the sale on the Recovery Series during the welcome tour.",
        "Walk the guest through the wellness waiver before they arrive at the spa.",
      ],
      answer: 1,
      explain:
        "Villa hosts plant. They don't explain, they don't close. A single warm mention and a clean handoff.",
    },
    {
      q: "When is the best time to introduce the Recovery Series to a guest?",
      options: [
        "At the first mention of the Pod at villa check-in.",
        "In the first 30 seconds after the guest emerges from the Pod.",
        "After the guest has had at least 60 seconds of silence post-session, during the Integration Conversation.",
        "At the front desk during check-out, as a follow-up for their next visit.",
      ],
      answer: 2,
      explain:
        "The Emergence is sacred — 60 seconds of silence first. Then the gentle Recovery Series offer.",
    },
    {
      q: "A guest has just opened their eyes after a session. What is the WORST thing you can do?",
      options: [
        "Hand them a glass of water without asking.",
        "Say 'take a moment, there is no rush.'",
        "Ask loudly 'so, how was it?!' and immediately pitch the Recovery Series.",
        "Stay quietly present in the room and wait for them to speak first.",
      ],
      answer: 2,
      explain:
        "The Emergence is a liminal state. Loud questions and immediate pitches destroy the afterglow.",
    },
    {
      q: "Why do we recommend sessions every other day rather than daily?",
      options: [
        "Because the Pod needs time to cool down between sessions.",
        "Because the afterglow — the physiological integration window — lasts 24 to 48 hours, and the body needs time to land the benefit.",
        "Because we want to fit more guests into the schedule.",
        "Because the scent needs to be refilled between sessions.",
      ],
      answer: 1,
      explain:
        "Every other day protects the afterglow. Daily sessions short-circuit the integration window.",
    },
    {
      q: "A guest says 'maybe later' to the Recovery Series. What is the right response?",
      options: [
        "Push a little harder — remind them of the benefits.",
        "Offer a discount on the series to close the deal.",
        "Say 'of course, I'll note that you enjoyed it, whenever you're ready' and let it go completely.",
        "Tell them the price will go up if they wait.",
      ],
      answer: 2,
      explain:
        "Warm acknowledgement and release. Pressure damages the brand.",
    },
  ],
};
