export const bitty = {};

const input = document.createElement("div");
input.innerHTML = "$_SIGNAL_";

export function $_SIGNAL_(ev, sender, el) {
  const html = bitty.render(input);
  const result = html.firstChild.innerHTML;
  if (result === "$_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
