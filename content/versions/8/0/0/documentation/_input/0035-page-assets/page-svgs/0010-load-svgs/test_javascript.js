export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const check = bitty.svg["svg_$_SIGNAL_"].querySelector("text");
  if (check.innerHTML === "svg") {
    el.innerHTML = bitty.time();
  }
}
