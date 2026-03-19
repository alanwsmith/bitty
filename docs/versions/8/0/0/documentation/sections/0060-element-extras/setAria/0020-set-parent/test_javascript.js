export const b = {};

export function signal_64DC0_v1(ev, sender, el) {
  el.setAria("label", "bravo");
  if (el.parentElement.getAttribute("aria-label") === "bravo") {
    el.innerHTML = b.time();
  }
}
