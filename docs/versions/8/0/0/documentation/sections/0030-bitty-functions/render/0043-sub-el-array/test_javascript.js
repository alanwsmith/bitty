export const b = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_91C63_v1";
input.appendChild(newEl);

const subEl1 = document.createElement("div");
subEl1.innerHTML = "UPDATED";
const subEl2 = document.createElement("div");
subEl2.innerHTML = "signal_91C63_v1";

const subs = {
  "TARGET_signal_91C63_v1": [subEl1, subEl2],
};

export function signal_91C63_v1(ev, sender, el) {
  const output = b.render(input, subs);
  if (output.firstChild.children[1].innerHTML === "signal_91C63_v1") {
    el.innerHTML = b.time();
  }
}
