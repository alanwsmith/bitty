export const bitty = {};

export function signal_A6DC9_alfa(ev, sender, el) {
  const result =
    bitty.templates.template_signal_A6DC9_alfa.querySelector("div").innerHTML;
  if (result === "Content signal_A6DC9_alfa") {
    el.innerHTML = bitty.time();
  }
}
