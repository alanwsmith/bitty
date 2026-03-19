export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  el.setProp("key", "bravo");
  if (el.parentElement.dataset.key === "bravo") {
    el.innerHTML = b.time();
  }
}
