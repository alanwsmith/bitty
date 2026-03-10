export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const check = b.svg["svg_$_SIGNAL_"].querySelector("text");
  if (check.innerHTML === "svg") {
    el.innerHTML = b.time();
  }
}
