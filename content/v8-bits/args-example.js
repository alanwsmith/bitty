export const b = {};

export function argsExample(ev, sender, el) {
  const eventType = ev.type;
  const senderName = sender.dataset.name;
  el.innerHTML = `${senderName} sent a ${eventType}`;
}
