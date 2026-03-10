export const b = {};

export function signal_3416E_v1(_, __, ___) {
  b.trigger("signal_3416E_v2");
}

export function signal_3416E_v2(_, sender, el) {
  if (sender === null) {
    el.innerHTML = b.time();
  }
}
