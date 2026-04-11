import type { Module } from "@/lib/types";

export const guestJourneyModule: Module = {
  slug: "guest-journey",
  number: 3,
  eyebrow: "Module Three",
  title: "The Guest Journey",
  subtitle: "A choreography, not a checklist",
  readingTime: 14,
  sections: [
    {
      kind: "prose",
      body: `A guest's Regenesis session does not begin when they step into the Pod. It begins the moment they **first hear about it** — usually from a villa host, a front office agent, or a spa receptionist — and it ends not when they step out, but in the hour afterwards when they are sitting quietly on a terrace or walking back to their room.

That full arc is the Guest Journey. And because three different teams at an Aman property touch it, the only way the guest experiences it as **one consistent story** is if every team knows its own part and hands off cleanly.

This module walks through the full choreography, role by role.`,
    },
    {
      kind: "pullquote",
      body: "The session is 30 minutes. The experience is a full afternoon.",
    },
    {
      kind: "prose",
      title: "The Journey at a Glance",
      body: `Before we go role by role, here is the full arc:`,
    },
    {
      kind: "list",
      items: [
        "**Discovery** — guest first hears about the Pod (villa host, front office, spa receptionist, or in-room collateral).",
        "**Booking** — guest commits to a session or, ideally, to the Recovery Series.",
        "**Arrival** — guest is welcomed into the Pod room. This is the moment that sets the tone for everything that follows.",
        "**Preparation** — brief orientation, waiver, explanation of controls.",
        "**Session** — the 30-minute experience inside the Pod.",
        "**Emergence** — the quiet moment immediately after the session, before the guest is pulled back into the world.",
        "**Integration** — the hour or two afterwards. This is where the Recovery Series conversation happens naturally.",
        "**Return** — the guest books their next session, and the cycle begins again.",
      ],
    },
    {
      kind: "callout",
      title: "The Villa Host · The First Touch",
      body: `You are often the first person at the property to mention the Pod. Your job is not to explain it — it is to **plant the seed**.

**When it comes up:**
- During a welcome tour of the villa.
- When a guest mentions they're tired, stressed, or here to rest.
- When a guest asks "what's new at Amanyara?"

**What to say:** *"There is something we have just introduced that you might enjoy — it is called the Regenesis Pod. It is the first one at any Aman destination in the world. I would suggest mentioning it at the spa when you head over — they can walk you through it properly."*

Notice what that line does. It positions the Pod as *exclusive* (first at any Aman), it acknowledges the guest's tiredness without prescribing, and it hands off cleanly to the spa team. You are not trying to explain PEMF. You are simply making the guest curious enough to ask about it later.`,
    },
    {
      kind: "callout",
      title: "The Front Office · The Conversion Point",
      body: `You are often the team that actually **books the session**. Your conversation is a little more detailed than the villa host's, because the guest is now asking real questions.

**When it comes up:**
- At check-in, when a guest asks about spa services.
- When a guest mentions a specific concern ("I'm so jet-lagged," "I have a sore back").
- When an existing spa booking is being made.

**What to say:** *"The Regenesis Pod is one of the experiences we would really recommend this stay. It is the first one at any Aman property globally. A single session is wonderful, but most of our guests here choose the **Recovery Series** — four sessions across the stay, every other day. It is designed so the body really lands the benefit. Would you like me to pencil the first session in now?"*

Notice the structure: **exclusivity → single → series → soft close**. Never pitch the series first. Always give them the single session as the accessible entry point, then introduce the series as the *"most of our guests"* choice. The social proof does the work.`,
    },
    {
      kind: "callout",
      title: "The Spa Reception · The Welcome",
      body: `You are the team that receives the guest on the day of their session. This is the most important ten minutes in the entire Guest Journey. Everything that follows — the quality of the experience, whether they book another session, whether they mention it to other guests — is shaped by the tone you set here.

**The Welcome (first 2 minutes):**
- Greet the guest warmly by name.
- Offer a glass of water or herbal tea.
- Speak more softly than you would normally. The whole room should feel like it is already **half a session in**.

**The Brief (next 5 minutes):**
- Walk them through what they will experience: *"You will be in the Pod for about 30 minutes. The door closes but it is not sealed — you can open it from the inside at any moment. Inside you will notice light, sound, a gentle vibration through the cushion, and the scent of [experience]. You don't need to do anything. The Pod does the work. All you need to do is close your eyes and let your body meet it."*
- Confirm which experience they booked. If this is their first time, gently re-confirm **RELAX** unless they have a strong preference.
- Complete the wellness waiver if not already done.

**The Entry (last 3 minutes):**
- Invite them to remove their shoes.
- Help them settle into the cushion.
- Start the experience.
- **Leave them alone.** Do not linger. Do not explain more. Close the room door softly.`,
    },
    {
      kind: "prose",
      title: "During the Session",
      body: `You are never far from the Pod while a guest is inside it. You do not need to hover — the experience is gentle and almost no guest has ever needed assistance — but you should be within earshot and you should know exactly where the emergency release is (covered in Module Six).

**Set a quiet alarm** so you are present in the room as the session ends. The guest should never emerge to an empty room. The Emergence is part of the experience.`,
    },
    {
      kind: "callout",
      title: "The Emergence · The Most Important Ninety Seconds",
      body: `When the session ends and the Pod door opens, the guest is in a **liminal state**. Their nervous system has just been in a deeply restorative place. How you treat them in the next ninety seconds determines whether that state carries into the rest of their day or evaporates.

**Do:**
- Be present in the room, quietly, before the door opens.
- Keep the lighting low.
- Speak softly, or do not speak at all.
- Offer a glass of water without asking.
- Say something like: *"Take a moment. There is no rush."*
- Let them leave the Pod on their own timing.

**Don't:**
- Rush in asking *"So? How was it?"* the moment the door opens.
- Turn the room lights up.
- Start explaining the next steps before they are ready to hear them.
- Hand them a feedback form or a bill in the first minute.

Give them **at least 60 seconds of silence** after they sit up. Then speak, gently.`,
    },
    {
      kind: "prose",
      title: "The Integration Conversation",
      body: `Now, and only now, is it time to ask how the experience was — and to gently open the door to the **Recovery Series** conversation if they came in for a single session.

This is the most important upsell moment in the entire Guest Journey, and it is the one that most teams botch by being either too pushy or too shy. The Regenesis way is a third path: you make a single, warm observation and then you stop.`,
    },
    {
      kind: "pullquote",
      body: "'Most of our guests who love their first session book into the Recovery Series for the rest of their stay. It is how you really land the benefit. Would you like me to hold three more for you this week?'",
    },
    {
      kind: "prose",
      body: `That line is the entire pitch. Notice what it doesn't do: it doesn't describe the science, it doesn't list the benefits, it doesn't apply pressure. It simply offers a door. If the guest says *"tell me more,"* you go deeper — but only then.

If the guest says *"maybe later,"* the correct response is: *"Of course. I'll note that you enjoyed it. Whenever you're ready."* And you let it go. The Pod has planted its own seed by now. Guests who say "maybe later" and enjoyed the first session usually come back on their own.`,
    },
    {
      kind: "prose",
      title: "The Integration Window",
      body: `After the guest leaves the spa, the session continues in their body for another **24 to 48 hours**. This is the *afterglow* — the physiological window when PEMF, infrared, and nervous system recalibration continue their work.

This is why we recommend sessions **every other day** rather than daily. The body needs time to integrate. Coming in every day short-circuits the afterglow and actually reduces cumulative benefit.

When you say goodbye, leave them with this:

> *"Drink plenty of water this afternoon, take it gently, and notice how you feel this evening and tomorrow. The Pod keeps working for about 48 hours after the session — that is the window when your body is actually integrating the benefit."*

This one sentence does three things: it gives the guest something to **notice** (which primes their nervous system to perceive the benefit), it explains the 48-hour cadence without sounding like a pitch, and it makes them an active participant in their own experience.`,
    },
    {
      kind: "prose",
      title: "The Handoff Back to the Villa",
      body: `The guest returns to their villa. If the villa host sees them that evening, a single quiet question is perfect: *"How was the Pod?"*

That is it. Not a pitch. Not a follow-up question. Just an acknowledgement that this thing happened, and an invitation for them to share if they want to. Most will. And when they do, the villa host can say: *"I am so glad. They mentioned you are coming back in on Wednesday — I'll make sure the villa is ready for you to rest afterwards."*

That is the full loop. Villa → Front Office → Spa → Villa → back to Spa. Three teams, one experience.`,
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
        "Villa hosts plant. They don't explain, they don't close. Their job is a single warm mention and a clean handoff.",
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
        "The Emergence is sacred — 60 seconds of silence first. Then, and only then, the gentle Recovery Series offer.",
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
        "The Emergence is a liminal state. Loud questions and immediate pitches destroy the afterglow and make the guest feel processed, not held.",
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
        "Every other day protects the afterglow. Daily sessions short-circuit the integration window and actually reduce cumulative benefit.",
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
        "Warm acknowledgement and release. The Pod has planted its own seed. Guests who loved their first session usually come back on their own — pressure damages the brand.",
    },
  ],
};
