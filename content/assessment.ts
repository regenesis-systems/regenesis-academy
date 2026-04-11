import type { QuizQuestion } from "@/lib/types";

export const FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    q: "A guest at Amanyara says 'I've got terrible insomnia — will this cure it?' What is your response?",
    options: [
      "'Yes, most of our guests with insomnia sleep perfectly after their first session.'",
      "'The Pod supports the body's natural recovery, and many guests report feeling deeply relaxed. I'd always suggest checking in with your doctor — but the experience is safe, and you can see how your body responds.'",
      "'It's clinically proven to treat insomnia.'",
      "'We can't answer that — you'll have to try it and see.'",
    ],
    answer: 1,
    explain:
      "Never make medical claims. Support language + 'check with your doctor' is the safe, warm, on-brand answer every time.",
  },
  {
    q: "Which of these words should you NEVER use to describe what the Pod does?",
    options: ["Experience", "Recalibration", "Treatment", "Journey"],
    answer: 2,
    explain: "Treatment is clinical and implies medical claims. Use *experience* or *session*.",
  },
  {
    q: "A guest has been on an overnight flight and is visibly flat and jet-lagged. Which experience do you suggest?",
    options: ["RELAX", "RECOVER", "REJUVENATE", "RECHARGE"],
    answer: 3,
    explain: "RECHARGE (Tangerine) is the bright reset — designed for jet lag and low energy.",
  },
  {
    q: "When is the correct moment to introduce the Recovery Series?",
    options: [
      "At villa check-in during the welcome tour.",
      "In the briefing before the first session.",
      "After the first session, during the Integration Conversation — once the guest has had 60 seconds of silence post-emergence.",
      "Never — it is considered pushy at Aman properties.",
    ],
    answer: 2,
    explain: "The guest must have *felt* the Pod first. Pitching earlier is pushy; pitching later is too late.",
  },
  {
    q: "Why do we recommend sessions every other day rather than daily?",
    options: [
      "Because the Pod's scent needs 24 hours to refill.",
      "Because the afterglow — the integration window — lasts 24 to 48 hours, and daily sessions prevent the body from landing the benefit.",
      "Because we want guests to rest in their villas.",
      "Because daily sessions overheat the Pod.",
    ],
    answer: 1,
    explain: "The 48-hour afterglow is the biological foundation of the Recovery Series cadence.",
  },
  {
    q: "At the end of the day, you power down the Pod by:",
    options: [
      "Unplugging the Pod from the step-down converter.",
      "Pressing the hidden exterior on/off button — never unplugging.",
      "Leaving it running overnight.",
      "Disconnecting the step-down converter from the wall.",
    ],
    answer: 1,
    explain: "Power button only, never unplug. Unplugging interrupts the internal maintenance cycle.",
  },
  {
    q: "How often is the olfactory system refilled during continuous operation?",
    options: ["Daily", "Every Monday", "Monthly", "Only when the scent fades"],
    answer: 1,
    explain: "Weekly refill — 10 drops of each doTERRA oil, every Monday.",
  },
  {
    q: "The Pod loses power during a session. The door has not opened automatically. Your first action is to:",
    options: [
      "Call the maintenance team and wait.",
      "Tell the guest through the door that power is out and ask them to stay calm for a few minutes.",
      "Announce yourself clearly, then immediately use the Manual Release without delay.",
      "Try the exterior door button again and again until it works.",
    ],
    answer: 2,
    explain: "Guest first. Announce, then Manual Release immediately. No diagnosis, no delay.",
  },
  {
    q: "A skeptical guest asks 'is this actually scientifically proven?' Best response:",
    options: [
      "List the studies and cite specific research papers.",
      "Acknowledge that it's fair to ask, and invite them into a single session — the experience is the argument.",
      "Insist firmly that it works and they will feel it.",
      "Tell them the Pod may not be right for them.",
    ],
    answer: 1,
    explain: "Agreement and invitation. The experience is the argument — never defend, never oversell.",
  },
  {
    q: "A cushion shows a mark on April 3rd. Next scheduled cleaning is April 15th. What do you do?",
    options: [
      "Wait until the 15th — schedules are schedules.",
      "Wipe the mark with Windex and move on.",
      "Swap to the backup cushion immediately and send the marked one to housekeeping.",
      "Cancel today's bookings.",
    ],
    answer: 2,
    explain: "The backup cushion exists for exactly this. Hygiene is never on a schedule — it's always now.",
  },
  {
    q: "A guest emerges from their first Pod session. The correct sequence is:",
    options: [
      "Ask immediately 'so how was it?!' and pitch the Recovery Series while they're still inspired.",
      "Be present silently, offer water, allow at least 60 seconds of quiet, then speak gently and only then open the Integration Conversation.",
      "Turn the room lights up so they can see clearly, then hand them a feedback form.",
      "Leave them alone until they come out of the room on their own timing.",
    ],
    answer: 1,
    explain: "The Emergence is sacred. 60 seconds of silence protects the afterglow. Then — and only then — a gentle conversation.",
  },
  {
    q: "A guest asks about the sixth scent marked REGENESIS. The correct on-brand answer:",
    options: [
      "'It's a secret experience for VIP guests only.'",
      "'We don't know — no one at Regenesis has told us.'",
      "'That one is still in development — something we're working on for the next generation of the Pod. We'll share more when it's ready.'",
      "'It smells the same as the others — we just haven't mapped it yet.'",
    ],
    answer: 2,
    explain: "Warm, honest, brief. Never invent, never hide, never overclaim.",
  },
  {
    q: "Which signature phrase best captures the philosophy of the Recovery Series?",
    options: [
      "'This is the most advanced wellness treatment in the world.'",
      "'The first session surprises you. The third one changes you.'",
      "'You need at least four sessions to get any real benefit.'",
      "'The Pod is approved by leading doctors.'",
    ],
    answer: 1,
    explain: "Expectation-building without overclaiming. One of the core on-brand phrases.",
  },
  {
    q: "A guest mentions they're on a meditation retreat and have been feeling 'scattered.' Which experience fits best?",
    options: ["RELAX", "RECOVER", "RECONNECT", "REJUVENATE"],
    answer: 2,
    explain: "RECONNECT (Frankincense) is the stillness journey — exactly the match for retreat-minded guests.",
  },
  {
    q: "What is the single most important principle of the Regenesis Voice?",
    options: [
      "Convince the guest the Pod is better than every alternative.",
      "Sell as many sessions as possible on the first visit.",
      "You are not selling — you are inviting. The Pod does the rest.",
      "Use scientific language to establish credibility quickly.",
    ],
    answer: 2,
    explain: "If you internalise one line from this entire Academy, it is this one.",
  },
];
