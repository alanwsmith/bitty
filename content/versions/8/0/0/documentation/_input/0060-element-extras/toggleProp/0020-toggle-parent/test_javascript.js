export const b = {};

export function $_SIGNAL_(_, __, el) {
  el.toggleProp("key");
  if (el.parentElement.dataset.key === "true") {
    el.innerHTML = b.time();
  }
}
