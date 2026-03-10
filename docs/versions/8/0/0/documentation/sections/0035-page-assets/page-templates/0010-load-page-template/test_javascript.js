export const bitty = {};

export function signal_A6DC9_v1(ev, sender, el) {
  const template = bitty.template["template_signal_A6DC9_v1"];
  const output = bitty.render(template);
  const result = output.firstChild.innerHTML;
  console.log(output);
  console.log(result);
  if (result === "Content signal_A6DC9_v1") {
    el.innerHTML = bitty.time();
  }
}
