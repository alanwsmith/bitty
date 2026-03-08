export const bitty = {};

export function signal_3416E_alfa(_, __, ___) {
  bitty.trigger("signal_3416E_bravo");
}

export function signal_3416E_bravo(_, sender, el) {
  if (sender === null) {
    el.innerHTML = bitty.time();
  }
}
