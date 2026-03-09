export const bitty = {};

export function signal_94F67_alfa(_, __, ___) {
  bitty.trigger("signal_94F67_bravo");
}

export function signal_94F67_bravo(ev, __, el) {
  if (ev.type === "bittytrigger") {
    el.innerHTML = bitty.time();
  }
}
