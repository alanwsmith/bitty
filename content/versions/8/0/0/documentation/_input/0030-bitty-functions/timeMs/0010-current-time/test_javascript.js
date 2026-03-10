export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const timestamp = b.timeMs();
  el.innerHTML = timestamp;
}
