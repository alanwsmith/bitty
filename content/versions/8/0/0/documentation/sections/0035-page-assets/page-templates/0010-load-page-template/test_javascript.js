export const b = {};

export function signal_A6DC9_v1(ev, sender, el) {
  const template = b.template["template_signal_A6DC9_v1"];
  const output = b.render(template);
  const result = output.firstChild.innerHTML;
  if (result === "Content signal_A6DC9_v1") {
    el.innerHTML = b.time();
  }
}
