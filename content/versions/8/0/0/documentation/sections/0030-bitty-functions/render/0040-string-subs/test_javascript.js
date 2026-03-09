export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_B1061_alfa";
input.appendChild(newEl);

const subs = {
  "TARGET_signal_B1061_alfa": "UPDATED_signal_B1061_alfa",
};

export function signal_B1061_alfa(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_signal_B1061_alfa") {
    el.innerHTML = bitty.time();
  }
}
