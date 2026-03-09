export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_1AC47_v1";
input.appendChild(newEl);

const subs = {
  "TARGET_signal_1AC47_v1": ["UPDATED_", "signal_1AC47_v1"],
};

export function signal_1AC47_v1(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_signal_1AC47_v1") {
    el.innerHTML = bitty.time();
  }
}
