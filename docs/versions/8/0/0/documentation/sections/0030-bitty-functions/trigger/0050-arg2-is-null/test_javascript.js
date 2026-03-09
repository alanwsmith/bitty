export const bitty = {};

export function signal_3416E_v1(_, __, ___) {
  bitty.trigger("signal_3416E_v2");
}

export function signal_3416E_v2(_, sender, el) {
  if (sender === null) {
    el.innerHTML = bitty.time();
  }
}
