export const b = {};

let activations = 0;

export function signal_F3E96_v1(ev, __, el) {
  activations += 1;
  if (activations === 1) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML =
      "got more than one activation or something other than a change event";
  }
}
