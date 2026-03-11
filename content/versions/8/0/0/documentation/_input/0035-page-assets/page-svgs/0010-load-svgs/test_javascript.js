export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (b.svgs["svg_$_SIGNAL_"] !== undefined) {
    el.innerHTML = b.time();
  }
}
