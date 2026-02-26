export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  el.innerHTML = `passed $${bitty.localTimestamp()}`;
}
