import type { QuizQuestion } from "@/lib/types";

export const FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    q: "A guest at Amanyara says 'I've got terrible insomnia. Will this cure it?' What is your response?",
    options: [
      "'Yes, most of our guests with insomnia sleep perfectly after their first session.'",
      "'The Pod supports the body's natural recovery, and many guests report feeling deeply relaxed. I'd always suggest checking in with your doctor, but the experience is safe, and you can see how your body responds.'",
      "'It's clinically proven to treat insomnia.'",
      "'We can't answer that. You'll have to try it and see.'",
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
      "'It's co-founded with Novak Djokovic, Aman's Global Wellness Ambassador. The same environment Novak uses himself.'",
      "'It's licensed by Aman from another company.'",
      "'I'm not sure. I'd have to check with my manager.'",
    ],
    answer: 1,
    explain:
      "Novak Djokovic is co-founder of Regenesis and Aman's Global Wellness Ambassador. This double-legitimacy is the single most powerful piece of context at an Aman property.",
  },
  {
    q: "A guest has been on an overnight flight and is visibly flat and jet-lagged. Which experience do you suggest?",
    options: ["RELAX", "RECONNECT", "RECHARGE", "Skip the Pod today"],
    answer: 0,
    explain:
      "RELAX (Lavender) is the deepest drop and the right call for a guest arriving flat and travel-worn. The 20-minute flagship gives them the cleanest reset.",
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
      "20 minutes is the flagship Relax protocol length. The total spa-room experience is ~30 minutes including brief, Arrival Sequence, and Emergence.",
  },
  {
    q: "Which is the LEAST appropriate moment to introduce the Recovery Series?",
    options: [
      "At villa check-in, as part of a relaxed welcome conversation.",
      "In the briefing immediately before the guest's first session, while they are about to go in.",
      "After the first session, during the Integration Conversation.",
      "A relaxed second conversation later in their stay.",
    ],
    answer: 1,
    explain: "Multiple moments work for introducing the Recovery Series. The one to avoid is right before they go in for their first session. They have not yet felt what they would be booking, and a pitch in that moment lands as pushy.",
  },
  {
    q: "Why do we recommend sessions every other day rather than daily?",
    options: [
      "Because the Pod's scent needs 24 hours to refill.",
      "Because the Pod can deliver serious energetic effects. The body benefits from time between sessions to settle and integrate. Daily would over-stimulate and blunt the cumulative benefit.",
      "Because we want guests to rest in their villas.",
      "Because daily sessions overheat the Pod.",
    ],
    answer: 1,
    explain: "The Pod's energetic intensity is why we space sessions every other day. Daily would over-stimulate.",
  },
  {
    q: "A guest signs up at Spa Reception and notes she has a pacemaker. What changes about her Pod sessions?",
    options: [
      "She cannot use the Pod. Decline politely.",
      "PEMF (the bioenergetic frequency layer) automatically switches off for every session. The other seven modalities run normally.",
      "She can use the Pod, but you must remember to disable PEMF manually each time.",
      "She must check with her doctor first, then return another day.",
    ],
    answer: 1,
    explain:
      "The waiver is built into the Pod sign-up. Implant flagged → PEMF auto-off, every session, automatically. The other seven modalities still deliver a deep recovery experience. Staff don't have to do anything manually.",
  },
  {
    q: "At the end of the day, you power down the Pod by:",
    options: [
      "Unplugging the Pod from the step-down converter.",
      "Pressing the illuminated exterior on/off button, never unplugging.",
      "Leaving it running overnight.",
      "Disconnecting the step-down converter from the wall.",
    ],
    answer: 1,
    explain: "Illuminated power button only, never unplug. Unplugging interrupts the internal maintenance cycle and breaks the Pod's link to Regenesis' protocol update servers.",
  },
  {
    q: "How often is the Pod's olfactory system refilled?",
    options: ["Daily", "Every Monday", "Fortnightly (every two weeks)", "Only when the scent fades"],
    answer: 2,
    explain: "Fortnightly refill. 10 drops of each natural essential oil. The Pod's olfactory system is a precision burst system, not a continuous diffuser.",
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
      "Mention the Pod is designed as an evolving environment, continuously refined with researchers at Harvard, UCLA and IACS, then invite them into a single session.",
      "Insist firmly that it works and they will feel it.",
      "Tell them the Pod may not be right for them.",
    ],
    answer: 1,
    explain: "Research partners calmly named + invitation to experience. Specific enough to be credible, never a medical claim.",
  },
  {
    q: "Which is the Regenesis-sanctioned term for the Pod's light pulses for neural entrainment?",
    options: [
      "Stroboscopic Light Therapy",
      "Pulsed Light Guidance",
      "Chromotherapy",
      "LED Stimulation",
    ],
    answer: 1,
    explain:
      "Regenesis' sanctioned term is *Pulsed Light Guidance*. One of the eight modalities of impact. Don't use the old technical terms.",
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
    explain: "The Emergence is sacred. 60 seconds of silence protects the afterglow, and then a gentle conversation can open.",
  },
  {
    q: "What is the single most important principle of the Regenesis Voice?",
    options: [
      "Convince the guest the Pod is better than every alternative.",
      "Sell as many sessions as possible on the first visit.",
      "You are not selling. You are inviting. The Pod does the rest.",
      "Use scientific language to establish credibility quickly.",
    ],
    answer: 2,
    explain: "If you internalise one line from this entire Academy, it is this one.",
  },
];
