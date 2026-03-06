export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "$_SIGNAL_";
input.appendChild(newEl);

export function $_SIGNAL_(ev, sender, el) {
  const output = bitty.render(input);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "$_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
