export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_1AC47_alfa";
input.appendChild(newEl);

const subs = {
  "TARGET_signal_1AC47_alfa": ["UPDATED_", "signal_1AC47_alfa"],
};

export function signal_1AC47_alfa(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_signal_1AC47_alfa") {
    el.innerHTML = bitty.time();
  }
}
