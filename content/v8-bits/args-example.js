export const b = {};

export function argsExample(ev, sender, el) {
  el.innerHTML = `${sender.innerHTML} sent a ${ev.type}`;
}
