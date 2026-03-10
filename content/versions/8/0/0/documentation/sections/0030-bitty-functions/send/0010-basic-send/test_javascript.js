export const b = {};

export function signal_8919E_v1(_, __, ___) {
  b.send({ key_signal_8919E_v1: "value_signal_8919E_v1" }, "signal_8919E_v2");
}

export function signal_8919E_v2(payload, __, el) {
  if (payload.key_signal_8919E_v1 === "value_signal_8919E_v1") {
    el.innerHTML = b.time();
  }
}
