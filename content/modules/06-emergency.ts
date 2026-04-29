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
      body: `Emergencies are rare. The Regenesis Pod 2.7 has multiple redundancies. Automatic and manual door release, and the guest can step out at any moment.

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
        "**Stay calm. Announce yourself through the door:** *'This is [name] from the spa team. The Pod has lost power briefly. You are completely safe, and I am opening the door for you now.'*",
        "**If the door does not open, use the Manual Release.** No waiting, no hoping.",
        "**Help the guest step out.** Seat, water, unhurried calm.",
        "**Contact Amanyara maintenance** for power restoration.",
        "**Do not resume** until power is restored AND a full Health Check has been run.",
        "**Log the event** immediately and contact Regenesis Technical Support.",
      ],
    },
    {
      kind: "callout",
      title: "The Manual Door Release · Practice This",
      body: `Every staff member must **physically practice** the Manual Release at least once before their first real session. You do not want to be figuring it out under stress with a guest inside.

**Where**

The exterior of the Pod, towards the front of the Pod under the door pivot point. The release is deliberately distinct from the **illuminated power button**. They are not to be confused. Your trainer will show you the exact location.

**How**

1. **Pull the toggle with firm, steady force and hold.** The mechanism is deliberately stiff. It cannot be activated accidentally.
2. **Keep it pulled** until the lock disengages.
3. **Aid the door gently** with your free hand until it is fully open.
4. **Do NOT release the toggle early**. Partial release can re-engage the lock.

The door mechanism may need inspection before the next use to ensure it has fully re-engaged.`,
    },
    {
      kind: "list",
      title: "Guest Distress",
      items: [
        "**Stop the session immediately** via the operator panel.",
        "**If the guest is panicking and tapping the interior button repeatedly,** speak through the door: *'Take your time. Just press the button once firmly, and wait a second or two.'*",
        "**If the door still does not open,** reassure them: *'Stay calm, I am going to open it from the outside.'* Try the exterior door button first. If that does not work, go to the Manual Release.",
        "**Speak softly:** *'I'm here. Take your time. You're completely safe.'*",
        "**Assist them out.** Some guests feel lightheaded coming out of a deep state suddenly. Especially if The Drop was happening when the session was interrupted.",
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
        "**Check breathing first.** If unconscious, confirm they are breathing and not choking or seizing. If they are stable, help them out of the Pod and lay them on their side in the recovery position. If moving them feels unsafe, leave them where they are until help arrives.",
        "**Stay with them.** Someone else contacts the on-duty manager.",
        "**Preserve the scene.** Do not reset the Pod or alter anything until the incident is documented.",
        "**Document everything immediately**. Time, symptoms, actions, response times.",
        "**Contact Regenesis Technical Support** at support@regenesispod.com. Guaranteed response within 24 hours.",
      ],
    },
    {
      kind: "callout",
      title: "System Malfunction Mid-Session",
      body: `**Minor malfunction** (weaker scent, one dim light section, one dial unresponsive): let the session complete, address between guests.

**Significant malfunction** (loud noise, overheating, burning smell, multiple dials unresponsive, anything that worries the guest): end the session calmly, bring the guest out using the distress protocol, take the Pod offline, contact Regenesis Technical Support.

**Never run the Pod with a known significant malfunction.** A canceled guest is recoverable. A guest hurt by a known problem is not.`,
    },
    {
      kind: "callout",
      title: "Regenesis Technical Support",
      body: `**Email:** support@regenesispod.com

**Live Support:** 18:00 to 10:00 TCI time (06:00 to 22:00 Bali WITA)

**Urgent-only window:** 10:00 to 12:00 TCI, for situations that cannot wait

**Guaranteed response:** within 24 hours

**Extended support** available outside these hours by prior arrangement

Save these contact details in your phone before your first shift. When something is wrong, you should not be searching for an email address.`,
    },
    {
      kind: "prose",
      title: "After Any Incident",
      body: `Every incident goes in the Maintenance Log immediately, with full detail. Regenesis Technical Support is notified. The Pod is inspected and cleared before next use.

This is not about blame. It is about **learning faster than any Pod can fail**. Every logged incident makes the next one less likely for the next guest, at the next Pod, anywhere in the world.`,
    },
  ],
  quiz: [
    {
      q: "The Pod loses power during a guest session. Your first action is to:",
      options: [
        "Call the electrician immediately.",
        "Check whether the door has opened automatically, and if not, use the Manual Release without delay.",
        "Wait 30 seconds to see if power returns on its own.",
        "Open the Pod hatch to inspect the wiring.",
      ],
      answer: 1,
      explain:
        "Guest first, equipment second. The Pod is designed to unlock automatically, but if it doesn't, the Manual Release is immediate.",
    },
    {
      q: "The illuminated exterior button on the Pod 2.7 is the:",
      options: [
        "Manual door release.",
        "Emergency stop for the three-dial control.",
        "Power on/off button. Used for Start-Up and Shut-Down.",
        "Scent refill access panel.",
      ],
      answer: 2,
      explain:
        "The illuminated button is the power button. It is distinct from the Manual Release toggle, which is located separately. Towards the front of the Pod under the door pivot point.",
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
        "Listen, don't fill the silence. Presence and calm matter more than words. Especially if The Drop was happening when the session was interrupted.",
    },
    {
      q: "What is the Regenesis Technical Support email address?",
      options: [
        "help@regenesis.com",
        "support@regenesispod.com",
        "technical@regenesispod.studio",
        "There is no technical support. Only the property's maintenance team.",
      ],
      answer: 1,
      explain:
        "support@regenesispod.com. Guaranteed response within 24 hours. Save it in your phone before your first shift.",
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
