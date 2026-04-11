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
      body: `A Regenesis session doesn't begin when the guest enters the Pod. It begins when they first hear about it, from a villa host, front office, or spa receptionist, and ends in the hour afterwards when they're sitting quietly on a terrace.

Three teams touch this arc. If each team knows its part and hands off cleanly, the guest experiences it as **one story**.`,
    },
    {
      kind: "pullquote",
      body: "The session is 20 minutes. The experience is a full afternoon.",
    },
    {
      kind: "list",
      title: "The Journey at a Glance",
      items: [
        "**Discovery**. First mention (villa host, front office, spa).",
        "**Booking**. Commits to a session or the Recovery Series.",
        "**Arrival**. Welcomed into the Pod room.",
        "**Preparation**. Brief, waiver, orientation.",
        "**The Breath Bridge**. The instructional opening of the session.",
        "**The Drop**. Transition from active breathing to passive entrainment.",
        "**Emergence**. The quiet moment just after. Sacred.",
        "**Integration**. The hour after. Where the Recovery Series conversation happens.",
        "**Return**. Next session booked.",
      ],
    },
    {
      kind: "callout",
      title: "Session Timing (What to Tell Guests)",
      body: `The Pod session itself is **20 minutes** (Regenesis offers protocols ranging from 8 to 21 minutes, with the 20-minute Relax protocol as the flagship).

The full spa-room experience is **30 minutes total**: 5 minutes to settle and brief, 20 minutes inside the Pod, 5 minutes for Emergence and integration.

When a guest asks how long, say: *"About 30 minutes in the spa room, with 20 of those inside the Pod itself."* That way the guest plans their day accurately and you never have them rushing out.`,
    },
    {
      kind: "callout",
      title: "The Villa Host · Plant the Seed",
      body: `You are the first touch. Your job is not to explain. It's to make them curious enough to ask at the spa.

**The line:** *"There's something new I think you might enjoy. The Regenesis Pod. It's co-founded by Novak Djokovic, who you'll know is Aman's Global Wellness Ambassador. I'd suggest mentioning it at the spa. They can walk you through it properly."*

That's it. The Novak fact does the heavy lifting in one sentence. Clean handoff. Don't try to explain the technology.`,
    },
    {
      kind: "callout",
      title: "The Front Office · The Conversion",
      body: `You usually book the session. The structure: **legitimacy → single → series → soft close.** Never pitch the series first.

**The line:** *"The Regenesis Pod is one of the newest experiences on our wellness menu. It's co-founded and designed with Novak Djokovic, our Global Wellness Ambassador. A single session is 150 dollars, but most of our guests here choose the **Recovery Series**: four sessions across the stay, every other day. It's the cadence that lets the body really land the benefit. Would you like me to pencil the first session in now?"*`,
    },
    {
      kind: "callout",
      title: "The Spa Reception · The Welcome",
      body: `The most important ten minutes in the whole journey. Everything after is shaped by the tone you set here.

**The Welcome (2 min):** Greet warmly by name. Offer water or tea. Speak more softly than normal. The room should feel *already half a session in*.

**The Brief (5 min):** *"You'll be in the Pod for about 20 minutes. We'll begin with a short breath practice I'll guide you through. We call it **The Breath Bridge**. It's just two minutes, to help your body arrive. Then you'll settle into the session. Inside, you'll notice light, immersive sound, a gentle somatic vibration through the cushion, and the scent of [experience]. The door closes but it isn't sealed. You can open it from the inside any time. You don't need to do anything. The Pod does the work."*

Confirm the experience booked. First-timers default to **RELAX** (the 20-min flagship) unless they have a strong preference. Complete the waiver if not done.

**The Entry (3 min):** Invite them to remove shoes. Help them settle. Guide The Breath Bridge. Start the experience. **Then leave them alone.** Close the door softly.`,
    },
    {
      kind: "prose",
      title: "The Breath Bridge · The Drop",
      body: `Every Pod session has a specific opening: a brief guided breath practice at the start of the protocol that helps the guest's nervous system synchronise with the Pod's rhythm. This is **The Breath Bridge**. It lasts only a minute or two.

What happens inside the session is a transition Tav calls **The Drop**. The moment the guest stops actively breathing-along and the Pod takes over, carrying them passively into entrainment. By session three, The Drop happens almost instantly; on session one it can take a few minutes. Both are normal.

Spa therapists: you will master guiding The Breath Bridge in the dedicated therapist workshop. Everyone else: it is enough to know the terms and reference them warmly when briefing a guest.`,
    },
    {
      kind: "prose",
      title: "During the Session",
      body: `Stay within earshot, not hovering. Know where the Manual Release is (Module Six). **Set a quiet alarm** so you're present in the room as the session ends. The guest should never emerge to an empty room.`,
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
      body: `Now, and only now, ask how it was and open the Recovery Series door. One warm observation, then stop.`,
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

> *"Drink plenty of water this afternoon, take it gently, and notice how you feel this evening and tomorrow. The Pod keeps working for about 48 hours after the session. That's when your body is actually integrating the benefit."*

This primes them to perceive the afterglow, explains the cadence, and makes them an active participant.`,
    },
  ],
  quiz: [
    {
      q: "How long is the Pod session itself, and how long is the full spa-room experience?",
      options: [
        "60 minutes in the Pod, 90 minutes total.",
        "30 minutes in the Pod, 45 minutes total.",
        "20 minutes in the Pod, 30 minutes total spa-room experience.",
        "It varies randomly from session to session.",
      ],
      answer: 2,
      explain:
        "The Pod session is 20 minutes (the flagship Relax protocol). The full spa-room experience is ~30 minutes including brief, Breath Bridge, and Emergence.",
    },
    {
      q: "What is 'The Breath Bridge'?",
      options: [
        "The name of the Pod's air filtration system.",
        "The brief guided breath practice at the opening of the session that helps the guest's nervous system synchronise with the Pod's rhythm.",
        "A piece of equipment above the cushion.",
        "The physical bridge between the Pod door and the cushion.",
      ],
      answer: 1,
      explain:
        "The Breath Bridge is the instructional opening. The practice that carries the guest into the session. Every staff member should know the term even if only therapists guide it.",
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
        "Because the afterglow. The physiological integration window. Lasts 24 to 48 hours, and the body needs time to land the benefit.",
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
        "Push a little harder. Remind them of the benefits.",
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
