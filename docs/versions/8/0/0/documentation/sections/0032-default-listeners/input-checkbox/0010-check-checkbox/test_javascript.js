export const b = {};

let activations = 0;

export function signal_7F250_v1(ev, sender, el) {
  activations += 1;
  if (activations === 1) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "got more than one activation";
  }
}
