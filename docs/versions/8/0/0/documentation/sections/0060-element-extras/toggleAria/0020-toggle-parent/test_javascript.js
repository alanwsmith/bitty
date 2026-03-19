export const b = {};

export function signal_D7E5C_v1(ev, sender, el) {
  el.toggleAria("label");
  const ancestor = el.closest("[aria-label]");
  if (ancestor.getAttribute("aria-label") === "true") {
    el.innerHTML = b.time();
  }
}
