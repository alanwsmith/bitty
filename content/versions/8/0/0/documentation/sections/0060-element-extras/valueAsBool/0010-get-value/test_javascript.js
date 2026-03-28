export const b = {};

export function signal_72290_v1(_, __, el) {
  if (el.valueBool() === true) {
    b.trigger("signal_72290_v2");
  }
}

export function signal_72290_v2(_, __, el) {
  el.innerHTML = b.time();
}
