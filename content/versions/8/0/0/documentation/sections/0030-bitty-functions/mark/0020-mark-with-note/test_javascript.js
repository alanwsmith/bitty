export const b = {};

export function signal_32A32_v1(ev, sender, el) {
  b.mark("32A32_v1", "note");
  if (b._marks["32A32_v1"][0][1] === "note") {
    el.innerHTML = b.time();
  }
}
