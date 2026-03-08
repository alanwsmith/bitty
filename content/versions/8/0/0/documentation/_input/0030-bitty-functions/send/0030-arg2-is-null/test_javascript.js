export const bitty = {};

export function $_SIGNAL_(_, __, ___) {
  bitty.send({}, "$_SIGNAL2_");
}

export function $_SIGNAL2_(_, sender, el) {
  if (sender === null) {
    el.innerHTML = bitty.time();
  }
}
