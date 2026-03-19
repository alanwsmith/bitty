export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.toggleAria("label");
  const ancestor = el.closest("[aria-label]");
  if (ancestor.getAttribute("aria-label") === "true") {
    el.innerHTML = b.time();
  }
}
