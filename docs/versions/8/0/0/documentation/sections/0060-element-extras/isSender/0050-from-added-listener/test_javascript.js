export const bitty = {};

export function init_CF3B2_v1() {
  bitty.addListener("event_CF3B2_v1", "signal_CF3B2_v1");
}

export function signal_CF3B2_v1(ev, sender, el) {
  if (el.isSender === false) {
    el.innerHTML = bitty.time();
  }
}
