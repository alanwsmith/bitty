export const bitty = {};

export function signal_90697_v1(ev, __, el) {
  if (ev.propAsFloat("key") === 1.1) {
    el.innerHTML = bitty.time();
  }
}
