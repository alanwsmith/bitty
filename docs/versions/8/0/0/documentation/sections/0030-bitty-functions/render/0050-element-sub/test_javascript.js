export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_F3DE4_alfa";
input.appendChild(newEl);

const subEl = document.createElement("div");
subEl.innerHTML = "UPDATED_signal_F3DE4_alfa";

const subs = {
  "TARGET_signal_F3DE4_alfa": subEl,
};

export function signal_F3DE4_alfa(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.firstChild.innerHTML === "UPDATED_signal_F3DE4_alfa") {
    el.innerHTML = bitty.time();
  }
}
