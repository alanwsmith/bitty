export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_EE715";
input.appendChild(newEl);

const subEl1 = document.createElement("div");
subEl1.innerHTML = "UPDATED";
const subEl2 = document.createElement("div");
subEl2.innerHTML = "signal_EE715";

const subs = {
  "TARGET_signal_EE715": [subEl1, subEl2],
};

export function signal_EE715(ev, sender, el) {
  el.dataset.solo = true;
  const output = bitty.renderHTML(input, subs);
  const checkEl = output.firstChild;
  if (output.firstChild.children[1].innerHTML === "signal_EE715") {
    el.innerHTML = bitty.localTimestamp();
  }
}
