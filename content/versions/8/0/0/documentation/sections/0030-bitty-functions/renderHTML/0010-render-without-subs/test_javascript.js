export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "signal_88FD4";
input.appendChild(newEl);

export function signal_88FD4(ev, sender, el) {
  const output = bitty.renderHTML(input);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "signal_88FD4") {
    el.innerHTML = bitty.localTimestamp();
  }
}
