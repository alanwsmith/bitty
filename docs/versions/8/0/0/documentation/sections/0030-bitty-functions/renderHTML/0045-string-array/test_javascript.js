export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_732C8";
input.appendChild(newEl);

const subs = {
  "TARGET_signal_732C8": ["UPDATED_", "signal_732C8"],
};

export function signal_732C8(ev, sender, el) {
  const output = bitty.renderHTML(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_signal_732C8") {
    el.innerHTML = bitty.localTimestamp();
  }
}
