export const bitty = {};

export function argsExample(ev, sender, el) {
  const eventType = ev.type;
  const senderId = sender.dataset.id;
  el.innerHTML = `${senderId} sent a ${eventType}`;
}
