export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.setAria("label", "bravo");
  if (el.parentElement.getAttribute("aria-label") === "bravo") {
    el.innerHTML = b.time();
  }
}
