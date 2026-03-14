export const b = {};

let clicks = 0;

export function signal_A1A49_v1(ev, sender, el) {
  clicks += 1;
  if (clicks === 1) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error";
  }
}
