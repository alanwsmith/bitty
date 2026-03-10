export const b = {};

export function signal_94F67_v1(_, __, ___) {
  b.trigger("signal_94F67_v2");
}

export function signal_94F67_v2(ev, __, el) {
  if (ev.type === "bittytrigger") {
    el.innerHTML = b.time();
  }
}
