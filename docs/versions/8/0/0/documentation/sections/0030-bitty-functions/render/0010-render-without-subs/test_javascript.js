export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "signal_E74C7";
input.appendChild(newEl);

export function signal_E74C7(ev, sender, el) {
  const output = bitty.render(input);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "signal_E74C7") {
    el.innerHTML = bitty.time();
  }
}
