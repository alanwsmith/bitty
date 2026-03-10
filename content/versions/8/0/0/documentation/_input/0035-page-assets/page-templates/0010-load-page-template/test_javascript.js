export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const template = b.template["template_$_SIGNAL_"];
  const output = b.render(template);
  const result = output.firstChild.innerHTML;
  if (result === "Content $_SIGNAL_") {
    el.innerHTML = b.time();
  }
}
