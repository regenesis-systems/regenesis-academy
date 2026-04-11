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
    q: "A guest asks 'who's actually behind this?' What is the correct on-brand answer?",
    options: [
      "'It's a wellness startup from Asia, not sure of the founders.'",
      "'It's co-founded by Novak Djokovic — Aman's Global Wellness Ambassador — and Regenesis co-founder Tav Keen. The same environment Novak uses himself.'",
      "'It's licensed by Aman from another company.'",
      "'I'm not sure — I'd have to check with my manager.'",
    ],
    answer: 1,
    explain:
      "Novak and Tav are co-founders of Regenesis. Novak is also Aman's Global Wellness Ambassador. This is the single most powerful piece of context at an Aman property.",
  },
  {
    q: "A guest has been on an overnight flight and is visibly flat and jet-lagged. Which experience do you suggest?",
    options: ["RELAX", "RECONNECT", "RECHARGE", "Skip the Pod today"],
    answer: 2,
    explain: "RECHARGE (Tangerine) is the bright reset — designed for jet lag and low energy.",
  },
  {
    q: "How long is the Pod session itself, and how long is the total spa-room experience?",
    options: [
      "60 minutes in the Pod, 90 minutes total.",
      "30 minutes in the Pod, 45 minutes total.",
      "20 minutes in the Pod, 30 minutes total spa-room experience.",
      "45 minutes in the Pod, 60 minutes total.",
    ],
    answer: 2,
    explain:
      "20 minutes is the flagship Relax protocol length. The total spa-room experience is ~30 minutes including brief, Breath Bridge, and Emergence.",
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
    q: "What is the single session price on the Amanyara menu, and what does the Recovery Series cost?",
    options: [
      "$75 single · $300 series",
      "$150 single · $600 series (4 × $150)",
      "$300 single · $1,200 series",
      "$400 single · $1,600 series",
    ],
    answer: 1,
    explain:
      "A single session is $150 for 20 minutes in the Pod. The Recovery Series of four sessions totals $600 — still less than a single signature facial + massage on the same menu.",
  },
  {
    q: "At the end of the day, you power down the Pod by:",
    options: [
      "Unplugging the Pod from the step-down converter.",
      "Pressing the illuminated exterior on/off button — never unplugging.",
      "Leaving it running overnight.",
      "Disconnecting the step-down converter from the wall.",
    ],
    answer: 1,
    explain: "Illuminated power button only, never unplug. Unplugging interrupts the internal maintenance cycle and breaks the Pod's link to Regenesis's protocol update servers.",
  },
  {
    q: "How often is the Pod's olfactory system refilled?",
    options: ["Daily", "Every Monday", "Fortnightly (every two weeks)", "Only when the scent fades"],
    answer: 2,
    explain: "Fortnightly refill — 10 drops of each doTERRA oil. The Pod's olfactory system is a precision burst system, not a continuous diffuser.",
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
      "Mention the Pod is a Living Installation with protocols continuously updated with researchers at IACS, Harvard and UCLA — then invite them into a single session.",
      "Insist firmly that it works and they will feel it.",
      "Tell them the Pod may not be right for them.",
    ],
    answer: 1,
    explain: "Research partners calmly named + invitation to experience. Specific enough to be credible, never a medical claim.",
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
      "Regenesis's sanctioned term is *Rhythmic Visual Priming* — one of the seven modalities of impact. Don't use the old technical terms.",
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
