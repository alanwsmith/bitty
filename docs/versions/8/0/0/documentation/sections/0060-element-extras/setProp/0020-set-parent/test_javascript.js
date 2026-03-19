export const b = {};

export function signal_0019A_v1(ev, sender, el) {
  el.setProp("key", "bravo");
  if (el.parentElement.dataset.key === "bravo") {
    el.innerHTML = b.time();
  }
}
