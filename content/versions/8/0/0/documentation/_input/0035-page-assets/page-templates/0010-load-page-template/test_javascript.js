export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const result =
    bitty.templates.template_$_SIGNAL_.querySelector("div").innerHTML;
  if (result === "Content $_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
