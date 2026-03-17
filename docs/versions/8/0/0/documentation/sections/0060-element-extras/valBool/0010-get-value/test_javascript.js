export const b = {};

export function signal_3C798_v1(_, __, el) {
  if (el.valBool() === true) {
    b.trigger("signal_3C798_v2");
  }
}

export function signal_3C798_v2(_, __, el) {
  el.innerHTML = b.time();
}
