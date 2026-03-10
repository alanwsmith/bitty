export const b = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_AC976_v1";
input.appendChild(newEl);

const subFragment = document.createElement("template");
subFragment.innerHTML = "<div>UPDATED_signal_AC976_v1</div>";

const subs = {
  "TARGET_signal_AC976_v1": subFragment.content,
};

export function signal_AC976_v1(ev, sender, el) {
  const output = b.render(input, subs);
  if (output.firstChild.firstChild.innerHTML === "UPDATED_signal_AC976_v1") {
    el.innerHTML = b.time();
  }
}
