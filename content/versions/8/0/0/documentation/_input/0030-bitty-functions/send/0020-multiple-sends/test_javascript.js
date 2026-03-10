export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.send({ key_$_SIGNAL_: "value_$_SIGNAL_" }, "$_SIGNAL2_ $_SIGNAL3_");
}

export function $_SIGNAL2_(payload, __, el) {
  if (payload.key_$_SIGNAL_ === "value_$_SIGNAL_") {
    el.innerHTML = b.time();
  }
}

export function $_SIGNAL3_(payload, __, el) {
  if (payload.key_$_SIGNAL_ === "value_$_SIGNAL_") {
    el.innerHTML = b.time();
  }
}
