export const bitty = {};

export function $_SIGNAL_(_, __, ___) {
  bitty.send({}, "$_SIGNAL2_");
}

export function $_SIGNAL2_(_, __, el) {
  if (el === null) {
    bitty.send({}, "$_SIGNAL3_");
  }
}

export function $_SIGNAL3_(_, __, el) {
  el.innerHTML = bitty.time();
}
