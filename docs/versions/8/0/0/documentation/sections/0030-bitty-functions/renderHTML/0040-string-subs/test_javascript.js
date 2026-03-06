export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_A378D";
input.appendChild(newEl);

const subs = {
  "TARGET_signal_A378D": "UPDATED_signal_A378D",
};

export function signal_A378D(ev, sender, el) {
  el.dataset.solo = true;
  const output = bitty.renderHTML(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_signal_A378D") {
    el.innerHTML = bitty.localTimestamp();
  }
}
