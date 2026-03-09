export const bitty = {};

export function signal_90697_alfa(ev, __, el) {
  if (ev.propAsFloat("key") === 1.1) {
    el.innerHTML = bitty.time();
  }
}
