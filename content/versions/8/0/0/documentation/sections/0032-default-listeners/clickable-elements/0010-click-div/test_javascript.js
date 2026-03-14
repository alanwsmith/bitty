export const b = {};

let activations = 0;

export function signal_7E9F1_v1(ev, __, el) {
  activations += 1;
  if (activations === 1 && ev.type === "click") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "got more than one activation";
  }
}
