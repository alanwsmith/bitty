export const bitty = {};

const input = document.createElement("div");
input.innerHTML = "signal_EFA3A";

export function signal_EFA3A(ev, sender, el) {
  const html = bitty.renderHTML(input);
  const result = html.firstChild.innerHTML;
  if (result === "signal_EFA3A") {
    el.innerHTML = bitty.localTimestamp();
  }
}
