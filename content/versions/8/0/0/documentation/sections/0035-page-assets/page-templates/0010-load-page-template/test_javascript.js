export const bitty = {};

export function signal_A6DC9_alfa(ev, sender, el) {
  const template = bitty.template["template_signal_A6DC9_alfa"];
  const result = template.querySelector("div").innerHTML;
  if (result === "Content signal_A6DC9_alfa") {
    el.innerHTML = bitty.time();
  }
}
