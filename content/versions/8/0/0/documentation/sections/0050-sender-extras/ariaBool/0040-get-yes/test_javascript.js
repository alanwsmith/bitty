export const b = {};

export function signal_B8744_v1(_, sender, el) {
  if (sender.ariaBool("label") === true) {
    el.innerHTML = b.time();
  }
}
