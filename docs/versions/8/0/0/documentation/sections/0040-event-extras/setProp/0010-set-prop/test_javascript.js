export const bitty = {};

export function signal_0067F_alfa(ev, sender, el) {
  ev.setProp("update", "0067F_alfa");
  if (ev.target.dataset.update === "0067F_alfa") {
    el.innerHTML = bitty.time();
  }
}
