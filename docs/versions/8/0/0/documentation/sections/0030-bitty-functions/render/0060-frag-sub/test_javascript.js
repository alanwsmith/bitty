export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_1EDC7_v1";
input.appendChild(newEl);

const subFragment = document.createElement("template");
subFragment.innerHTML = "<div>UPDATED_signal_1EDC7_v1</div>";

const subs = {
  "TARGET_signal_1EDC7_v1": subFragment.content,
};

export function signal_1EDC7_v1(ev, sender, el) {
  const output = bitty.render(input, subs);
  if (output.firstChild.firstChild.innerHTML === "UPDATED_signal_1EDC7_v1") {
    el.innerHTML = bitty.time();
  }
}
