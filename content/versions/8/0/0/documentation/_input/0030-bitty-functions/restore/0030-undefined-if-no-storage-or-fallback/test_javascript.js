export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const result = b.restore("intentionally-missing-$_SIGNAL_");
  if (result === undefined) {
    el.innerHTML = b.time();
  }
}
