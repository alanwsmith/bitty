export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (el.aria("label") === "alfa") {
    el.innerHTML = b.time();
  }
}
