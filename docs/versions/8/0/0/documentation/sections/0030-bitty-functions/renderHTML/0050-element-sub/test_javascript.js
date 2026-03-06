export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_EC949";
input.appendChild(newEl);

const subEl = document.createElement("div");
subEl.innerHTML = "UPDATED_signal_EC949";

const subs = {
  "TARGET_signal_EC949": subEl,
};

export function signal_EC949(ev, sender, el) {
  const output = bitty.renderHTML(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.firstChild.innerHTML === "UPDATED_signal_EC949") {
    el.innerHTML = bitty.localTimestamp();
  }
}
