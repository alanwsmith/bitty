export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.send({}, "$_SIGNAL2_");
}

export function $_SIGNAL2_(_, __, el) {
  if (el === null) {
    b.send({}, "$_SIGNAL3_");
  }
}

export function $_SIGNAL3_(_, __, el) {
  el.innerHTML = b.time();
}
