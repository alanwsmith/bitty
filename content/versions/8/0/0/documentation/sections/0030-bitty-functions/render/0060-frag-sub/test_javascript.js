export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_1EDC7";
input.appendChild(newEl);

const subFragment = document.createElement("template");
subFragment.innerHTML = "<div>UPDATED_signal_1EDC7</div>";

const subs = {
  "TARGET_signal_1EDC7": subFragment.content,
};

export function signal_1EDC7(ev, sender, el) {
  const output = bitty.render(input, subs);
  if (output.firstChild.firstChild.innerHTML === "UPDATED_signal_1EDC7") {
    el.innerHTML = bitty.time();
  }
}
