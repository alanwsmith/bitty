export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const timestamp = bitty.localTimestampMs();
  el.innerHTML = `passed $${timestamp}`;
}
