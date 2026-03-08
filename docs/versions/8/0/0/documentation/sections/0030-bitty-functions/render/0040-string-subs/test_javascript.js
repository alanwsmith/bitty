export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_B1061";
input.appendChild(newEl);

const subs = {
  "TARGET_signal_B1061": "UPDATED_signal_B1061",
};

export function signal_B1061(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_signal_B1061") {
    el.innerHTML = bitty.time();
  }
}
