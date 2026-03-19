export const b = {};

export function signal_C7BF0_v1(_, __, el) {
  el.toggleProp("key");
  if (el.parentElement.dataset.key === "true") {
    el.innerHTML = b.time();
  }
}
