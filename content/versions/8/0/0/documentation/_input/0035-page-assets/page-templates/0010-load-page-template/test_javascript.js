export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const template = bitty.template["template_$_SIGNAL_"];
  const result = template.querySelector("div").innerHTML;
  if (result === "Content $_SIGNAL_") {
    el.innerHTML = bitty.time();
  }
}
