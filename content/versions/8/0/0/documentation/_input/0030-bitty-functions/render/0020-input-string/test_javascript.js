export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const html = bitty.render("<div>$_SIGNAL_</div");
  const result = html.firstChild.innerHTML;
  if (result === "$_SIGNAL_") {
    el.innerHTML = bitty.time();
  }
}
