export const bitty = {};

export function signal_A6DC9(ev, sender, el) {
  const result =
    bitty.templates.template_signal_A6DC9.querySelector("div").innerHTML;
  if (result === "Content signal_A6DC9") {
    el.innerHTML = bitty.time();
  }
}
