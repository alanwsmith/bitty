export const bitty = {};

export function signal_8919E_alfa(_, __, ___) {
  bitty.send({ key_signal_8919E_alfa: "value_signal_8919E_alfa" }, "signal_8919E_bravo");
}

export function signal_8919E_bravo(payload, __, el) {
  if (payload.key_signal_8919E_alfa === "value_signal_8919E_alfa") {
    el.innerHTML = bitty.time();
  }
}
