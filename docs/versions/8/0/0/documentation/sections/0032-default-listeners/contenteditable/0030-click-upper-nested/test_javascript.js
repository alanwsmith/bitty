export const b = {};

let clicks = 0;

export function signal_882C1_v1(ev, sender, el) {
  clicks += 1;
  if (clicks === 1) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error";
  }
}
