export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_1EDC7_alfa";
input.appendChild(newEl);

const subFragment = document.createElement("template");
subFragment.innerHTML = "<div>UPDATED_signal_1EDC7_alfa</div>";

const subs = {
  "TARGET_signal_1EDC7_alfa": subFragment.content,
};

export function signal_1EDC7_alfa(ev, sender, el) {
  const output = bitty.render(input, subs);
  if (output.firstChild.firstChild.innerHTML === "UPDATED_signal_1EDC7_alfa") {
    el.innerHTML = bitty.time();
  }
}
