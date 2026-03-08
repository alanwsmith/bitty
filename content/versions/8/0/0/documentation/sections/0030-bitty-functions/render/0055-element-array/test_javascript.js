export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_02C95";
input.appendChild(newEl);

const subEl1 = document.createElement("div");
subEl1.innerHTML = "UPDATED";
const subEl2 = document.createElement("div");
subEl2.innerHTML = "signal_02C95";

const subs = {
  "TARGET_signal_02C95": [subEl1, subEl2],
};

export function signal_02C95(ev, sender, el) {
  const output = bitty.render(input, subs);
  if (output.firstChild.children[1].innerHTML === "signal_02C95") {
    el.innerHTML = bitty.time();
  }
}
