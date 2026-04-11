import type { Module } from "@/lib/types";

export const emergencyModule: Module = {
  slug: "emergency-protocols",
  number: 6,
  eyebrow: "Module Six",
  title: "Emergency Protocols",
  subtitle: "Calm response when seconds matter",
  readingTime: 5,
  sections: [
    {
      kind: "prose",
      body: `Emergencies are rare. The Pod has multiple redundancies — automatic and manual door release, no drugs, no chemicals, and the guest can step out at any moment.

But rare is not never. When something unexpected happens, the difference between a small moment of concern and a damaged guest relationship is **how calmly and quickly you respond**. Read this slowly, then practice the Manual Release at least once before your first guest.`,
    },
    {
      kind: "pullquote",
      body: "In an emergency, the guest remembers your calm more than anything else that happened.",
    },
    {
      kind: "callout",
      title: "The Core Principle · Guest First, Always",
      body: `Whatever is going wrong, the rule that overrides everything: **guest first, equipment second, explanation third**. Do not pause to diagnose while a guest is still inside the Pod. Get them out, reassure them, deal with the technology afterwards.`,
    },
    {
      kind: "list",
      title: "Power Outage",
      items: [
        "**Stay calm. Announce yourself through the door:** *'This is [name] from the spa team. The Pod has lost power briefly — you are completely safe, and I am going to open the door for you now.'*",
        "**Check if the door opened automatically.** It usually does within a few seconds.",
        "**If not, use the Manual Release.** No waiting, no hoping.",
        "**Help the guest step out.** Seat, water, unhurried calm.",
        "**Contact property maintenance** for power restoration.",
        "**Do not resume** until power is restored AND a full Health Check has been run.",
        "**Log the event** immediately.",
      ],
    },
    {
      kind: "callout",
      title: "The Manual Door Release · Practice This",
      body: `Every staff member must **physically practice** the Manual Release at least once before their first real session. You do not want to be figuring it out under stress with a guest inside.

**Where:** exterior of the Pod, below the hinge, on the side of the door. Your trainer will show you the exact location.

**How:**

1. **Pull the toggle with firm, steady force and hold.** The mechanism is deliberately stiff — it cannot be activated accidentally.
2. **Keep it pulled** until the lock disengages.
3. **Aid the door gently** with your free hand until it is fully open.
4. **Do NOT release the toggle early** — partial release can re-engage the lock.

After a Manual Release, contact Regenesis Technical Support. The door mechanism needs inspection before the next use.`,
    },
    {
      kind: "list",
      title: "Guest Distress",
      items: [
        "**Stop the session immediately** from the exterior tablet.",
        "**Open the door.** If the button doesn't respond in a few seconds, go straight to Manual Release.",
        "**Speak softly:** *'I'm here. Take your time. You're completely safe.'*",
        "**Assist them out.** Some guests feel lightheaded coming out of a deep state suddenly.",
        "**Offer water and quiet.** Don't ask what happened. Don't pitch another session. Let them speak first.",
        "**Follow up the next day** with a brief handwritten note to their villa. Never push, never disappear.",
      ],
    },
    {
      kind: "list",
      title: "Medical Emergency",
      items: [
        "**Contact emergency services immediately** via the Amanyara emergency line.",
        "**Get the guest out safely** using the Manual Release if needed.",
        "**Do not move the guest further than necessary.** If unconscious, leave them where they are until help arrives.",
        "**Stay with them.** Someone else contacts the on-duty manager.",
        "**Preserve the scene.** Do not reset the Pod or alter anything until the incident is documented.",
        "**Document everything immediately** — time, symptoms, actions, response times.",
      ],
    },
    {
      kind: "callout",
      title: "System Malfunction Mid-Session",
      body: `**Minor malfunction** (weaker scent, one dim screen section): let the session complete, address between guests.

**Significant malfunction** (loud noise, overheating, burning smell, anything that worries the guest): end the session calmly, bring the guest out using the distress protocol, take the Pod offline, contact Regenesis Technical Support.

**Never run the Pod with a known significant malfunction.** A canceled guest is recoverable. A guest hurt by a known problem is not.`,
    },
    {
      kind: "prose",
      title: "After Any Incident",
      body: `Every incident goes in the Maintenance Log immediately, with full detail. Regenesis Technical Support is notified. The Pod is inspected and cleared before next use.

This is not about blame. It is about **learning faster than any Pod can fail** — every logged incident makes the next one less likely for the next guest, at the next Pod, anywhere in the world.`,
    },
  ],
  quiz: [
    {
      q: "The Pod loses power during a guest session. Your first action is to:",
      options: [
        "Call the electrician immediately.",
        "Check whether the door has opened automatically — and if not, use the Manual Release without delay.",
        "Wait 30 seconds to see if power returns on its own.",
        "Open the Pod hatch to inspect the wiring.",
      ],
      answer: 1,
      explain:
        "Guest first, equipment second. The Pod is designed to unlock automatically, but if it doesn't, the Manual Release is immediate.",
    },
    {
      q: "How frequently should each staff member physically practice the Manual Release?",
      options: [
        "Once a year, during annual training.",
        "Only when an actual emergency happens.",
        "At least once during their first shift, before handling any real guest session.",
        "Only the Engineering team needs to practice it.",
      ],
      answer: 2,
      explain:
        "Muscle memory. You do not want to be figuring out the Manual Release for the first time with a guest inside.",
    },
    {
      q: "A guest becomes distressed mid-session and wants out immediately. After ending the session and opening the door, the correct response is to:",
      options: [
        "Ask them what happened, so you can document it in detail.",
        "Reassure them firmly that the Pod is completely safe and encourage them to try again.",
        "Speak softly, offer water and a quiet seat, and let them speak first.",
        "Apologise profusely and offer a refund immediately.",
      ],
      answer: 2,
      explain:
        "Listen, don't fill the silence. Presence and calm matter more than words.",
    },
    {
      q: "During a session you hear an unusual loud noise from the Pod and smell something burning. What do you do?",
      options: [
        "Let the session finish so you don't disturb the guest, then investigate.",
        "End the session immediately, bring the guest out using the distress protocol, take the Pod offline, and contact Regenesis Technical Support.",
        "Open the back hatch while the session runs to investigate the source.",
        "Call property maintenance and wait for them to arrive.",
      ],
      answer: 1,
      explain:
        "Significant malfunction — especially anything involving heat or smell — is an immediate stop.",
    },
    {
      q: "After any incident (power loss, guest distress, malfunction) you should:",
      options: [
        "Clean the Pod immediately and move on to avoid delays.",
        "Wait until the end of the day to write a summary.",
        "Log the incident immediately in the Regenesis Maintenance Log and notify Regenesis Technical Support.",
        "Only log incidents that involve injury to the guest.",
      ],
      answer: 2,
      explain:
        "Every incident, every time. The log is how Regenesis learns faster than any Pod can fail.",
    },
  ],
};
