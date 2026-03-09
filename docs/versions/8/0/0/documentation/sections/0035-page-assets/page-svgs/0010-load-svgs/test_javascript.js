export const bitty = {};

export function signal_24CEF_alfa(ev, sender, el) {
  const check = bitty.svg["svg_signal_24CEF_alfa"].querySelector("text");
  if (check.innerHTML === "svg") {
    el.innerHTML = bitty.time();
  }
}
