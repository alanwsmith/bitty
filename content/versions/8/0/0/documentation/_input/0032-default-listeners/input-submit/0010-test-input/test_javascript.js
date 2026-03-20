export const b = {};

let activations = 0;

export function $_SIGNAL_(ev, __, el) {
  activations += 1;
  if (activations === 1) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "got more than one activation";
  }
}
