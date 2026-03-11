export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const timestamp = b.time();
  el.innerHTML = timestamp;
}
