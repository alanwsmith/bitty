export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const timestamp = bitty.localTimestamp();
  el.innerHTML = timestamp;
}
