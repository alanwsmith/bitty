export const b = {};

let clicks = 0;

export function $_SIGNAL_(ev, sender, el) {
  clicks += 1;
  if (clicks === 1) {
    el.innerHTML = b.time();
  } else {
    el.innerHTML = "error";
  }
}
