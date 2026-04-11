import type { Module } from "@/lib/types";

export const emergencyModule: Module = {
  slug: "emergency-protocols",
  number: 6,
  eyebrow: "Module Six",
  title: "Emergency Protocols",
  subtitle: "Calm response when seconds matter",
  readingTime: 9,
  sections: [
    {
      kind: "prose",
      body: `In thousands of Regenesis sessions, emergencies are rare. The Pod is designed with multiple redundancies — the door has both automatic and manual release mechanisms, the environment is non-invasive, there are no drugs or chemicals, and the guest can simply sit up and step out at any moment.

But rare is not the same as never. A power outage, a door that doesn't open automatically, a guest who feels claustrophobic mid-session, a component malfunction — any of these can happen, and when they do, the difference between a small moment of concern and a damaged guest relationship is **how calmly and quickly the staff member on duty responds**.

This module exists so that when something unexpected happens, you know exactly what to do. Read it slowly. Then read it again. Then practice the Manual Release at least once, physically, before your first guest session.`,
    },
    {
      kind: "pullquote",
      body: "In an emergency, the guest remembers your calm more than anything else that happened.",
    },
    {
      kind: "callout",
      title: "The Core Principle · Guest First, Always",
      body: `Whatever else is going wrong — power, door, screen, scent — the single rule that overrides everything is: **the guest's safety and comfort comes first, the equipment comes second, and the explanation comes third**.

Do not pause to diagnose an issue while a guest is still inside the Pod. Get them out safely, reassure them, and deal with the technology afterwards.`,
    },
    {
      kind: "prose",
      title: "Power Outage",
      body: `If the Pod loses power during a session — whether the whole room is out or just the Pod itself:`,
    },
    {
      kind: "list",
      items: [
        "**Stay calm and speak clearly.** Announce yourself through the door if the guest cannot see you: *'This is [your name] from the spa team. The Pod has lost power briefly — you are completely safe, and I am going to open the door for you now.'*",
        "**Check whether the door opened automatically.** The Pod is designed to unlock on power loss. In most cases the door will open by itself within a few seconds.",
        "**If the door has not opened, use the Manual Release** (see next section). Do not wait and hope power returns.",
        "**Help the guest step out.** Offer them a seat outside the Pod, a glass of water, and unhurried calm. Do not rush them.",
        "**Contact the property's maintenance team** to restore power.",
        "**Do not attempt to resume the session on the same power state.** Once power is restored, run a full Health Check before any further use.",
        "**Log the event** in the Maintenance Log immediately.",
      ],
    },
    {
      kind: "callout",
      title: "The Manual Door Release · Practice This",
      body: `Every staff member who operates the Pod must physically practice the Manual Release at least once, ideally during their first shift. It is not a thing you want to be figuring out under stress with a guest inside.

**Where to find it.** The Manual Release toggle is located on the **exterior of the Pod**, below the hinge, on the side of the door. (Your trainer will show you the exact location during technical training — then you will practice finding it blindfolded, or with your eyes closed, so your hand remembers.)

**How to activate it:**

1. **Pull the toggle with firm, steady force and hold.** The mechanism is deliberately stiff so it cannot be activated accidentally.
2. **Keep the toggle pulled** until the door's locking mechanism disengages.
3. **Aid the door's opening gently** — support it with your free hand if it does not glide open on its own, until the door is fully open.
4. **If needed, reach inside and help the door the last of the way** with a gentle push from the interior side.

**Do NOT release the toggle** before the door is fully open. Partial release can re-engage the lock.

After the release, the guest can step out. The Pod's door mechanism will need to be inspected and reset before the next use — do not attempt this yourself unless you are on the Engineering team. Contact Regenesis Technical Support.`,
    },
    {
      kind: "prose",
      title: "Guest Distress",
      body: `Occasionally a guest will feel distressed mid-session — usually due to claustrophobia, an unexpected emotional release, or simply a change of heart about being in an enclosed space. This is not an emergency in the medical sense, but it is a moment where the quality of your response defines the guest's relationship with the Pod forever.`,
    },
    {
      kind: "list",
      items: [
        "**Stop the session immediately.** From the exterior tablet, end the current experience. The interior lights will come up softly.",
        "**Open the door.** Use the exterior door button. If it doesn't respond within a few seconds, go straight to the Manual Release — do not hesitate.",
        "**Speak softly.** *'I'm here. Take your time. You're completely safe. Step out whenever you're ready.'*",
        "**Assist them out if needed.** Some guests may feel lightheaded coming out of a deep restorative state suddenly. Offer a hand and guide them to a seat.",
        "**Offer water and quiet.** Do not ask what happened or whether they want to try again. Let them speak first.",
        "**If they want to talk, listen.** If they do not, simply be present. Do not fill the silence with explanations.",
        "**Follow up the next day.** A brief, handwritten note to their villa: *'Thinking of you after yesterday. Whenever you're ready to come back, I'd love to walk you through it again — gently.'* Never push. But never disappear either.",
      ],
    },
    {
      kind: "prose",
      title: "Medical Emergency",
      body: `In the extremely rare event that a guest experiences a medical emergency during a session — chest pain, loss of consciousness, difficulty breathing, any acute symptom:`,
    },
    {
      kind: "list",
      items: [
        "**Contact emergency services immediately.** Do not wait to assess. Dial the Amanyara emergency line and request medical response.",
        "**Get the guest out of the Pod safely.** Use the Manual Release if needed.",
        "**Do not move the guest further than necessary.** If they are conscious, help them to a comfortable seat. If they are not, leave them where they are until medical help arrives.",
        "**Stay with them.** Do not leave the guest alone. Someone else on the team should contact the property's on-duty manager.",
        "**Preserve the scene.** Do not reset the Pod, clean the room, or alter anything until the incident has been fully documented.",
        "**Document everything immediately afterwards** — time, symptoms, actions taken, response time. This protects the guest, the property, and Regenesis.",
      ],
    },
    {
      kind: "callout",
      title: "System Malfunction Mid-Session",
      body: `If the Pod shows a visible malfunction during a session — a screen section going dark, an unusual noise, a scent delivery failure, anything that would compromise the guest experience:

- **Do not pause the session mid-way to investigate.** This is more disruptive than the malfunction itself.
- **If the malfunction is minor** (scent weaker than usual, one screen section dim), let the session complete naturally and address it between guests.
- **If the malfunction is significant** (loud noise, overheating, smell of burning, or anything that concerns the guest), end the session calmly, bring the guest out with the standard distress protocol, and take the Pod offline until Regenesis Technical Support has been consulted.
- **Never run the Pod with a known significant malfunction.** A canceled guest is recoverable. A guest hurt by a malfunction the team knew about is not.`,
    },
    {
      kind: "prose",
      title: "After Any Incident",
      body: `Every incident — power outage, door release, guest distress, medical event, significant malfunction — is **logged immediately** in the Regenesis Maintenance Log, with full details. Regenesis is notified directly via the technical support contact. The Pod is inspected and cleared before the next use.

This is not about blame. It is about **learning faster than any Pod can fail**. Every incident logged makes the next one less likely to happen to the next guest, at the next Pod, anywhere in the world.`,
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
        "Guest first, equipment second. The Pod is designed to unlock automatically on power loss, but if it doesn't, the Manual Release is immediate — not a delay, not a diagnosis.",
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
        "Muscle memory. You do not want to be figuring out the Manual Release for the first time with a guest inside the Pod under stress.",
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
        "Listen, don't fill the silence. Don't pitch, don't apologise excessively, don't interrogate. Presence and calm matter more than words.",
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
        "A significant malfunction — especially anything involving heat or smell — is an immediate stop. Never run the Pod with a known significant issue. Guest safety over session completion, always.",
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
        "Every incident, every time. The log is how Regenesis learns faster than any Pod can fail — and how we protect every guest at every property.",
    },
  ],
};
