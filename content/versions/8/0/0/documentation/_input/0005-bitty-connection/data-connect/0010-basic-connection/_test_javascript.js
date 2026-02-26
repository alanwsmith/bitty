export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const updated = bitty.localTimestamp();
  el.innerHTML = updated;
}
