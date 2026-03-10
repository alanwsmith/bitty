export const b = {};

export function $_SIGNAL_(_, __, ___) {
  b.send({}, "$_SIGNAL2_");
}

export function $_SIGNAL2_(_, sender, el) {
  if (sender === null) {
    el.innerHTML = b.time();
  }
}
