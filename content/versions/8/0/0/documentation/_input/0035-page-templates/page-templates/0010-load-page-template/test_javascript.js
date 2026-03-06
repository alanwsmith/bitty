export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  el.dataset.solo = true;
  const result =
    bitty.templates.template_$_SIGNAL_.querySelector("div").innerHTML;
  console.log(result);
  if (result === "Content $_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
