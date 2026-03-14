export const b = {};

let activations = 0;

export function signal_CEEB4_v1(ev, __, el) {
  console.log(ev);
  activations += 1;
  if (activations === 1 && ev.type === "change") {
    el.innerHTML = b.time();
  } else {
    el.innerHTML =
      "got more than one activation or something other than a change event";
  }
}
