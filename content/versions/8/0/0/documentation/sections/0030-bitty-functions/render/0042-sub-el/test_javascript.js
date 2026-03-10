export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_E7902_v1";
input.appendChild(newEl);

const subEl = document.createElement("div");
subEl.innerHTML = "UPDATED_signal_E7902_v1";

const subs = {
  "TARGET_signal_E7902_v1": subEl,
};

export function signal_E7902_v1(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.firstChild.innerHTML === "UPDATED_signal_E7902_v1") {
    el.innerHTML = bitty.time();
  }
}
