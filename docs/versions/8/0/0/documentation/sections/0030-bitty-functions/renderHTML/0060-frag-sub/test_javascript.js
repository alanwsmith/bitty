export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_05124";
input.appendChild(newEl);

const subFragment = document.createElement("template");
subFragment.innerHTML = "<div>UPDATED_signal_05124</div>";

const subs = {
  "TARGET_signal_05124": subFragment.content,
};

export function signal_05124(ev, sender, el) {
  const output = bitty.renderHTML(input, subs);
  if (output.firstChild.firstChild.innerHTML === "UPDATED_signal_05124") {
    el.innerHTML = bitty.localTimestamp();
  }
}
