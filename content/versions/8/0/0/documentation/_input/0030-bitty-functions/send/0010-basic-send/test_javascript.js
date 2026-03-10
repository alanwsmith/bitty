export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.send({ key_$_SIGNAL_: "value_$_SIGNAL_" }, "$_SIGNAL2_");
}

export function $_SIGNAL2_(payload, __, el) {
  if (payload.key_$_SIGNAL_ === "value_$_SIGNAL_") {
    el.innerHTML = b.time();
  }
}
