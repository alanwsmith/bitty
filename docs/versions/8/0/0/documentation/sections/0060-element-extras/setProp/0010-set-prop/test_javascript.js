export const b = {};

export function signal_A090D_v1(_, __, el) {
  el.setProp("update", "A090D_v1");
  if (el.dataset.update === "A090D_v1") {
    el.innerHTML = b.time();
  }
}
