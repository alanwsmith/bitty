export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_E77EC";
input.appendChild(newEl);

const subFragment1 = document.createElement("template");
subFragment1.innerHTML = "<div>UPDATED</div>";

const subFragment2 = document.createElement("template");
subFragment2.innerHTML = "<div>signal_E77EC</div>";

const subs = {
  "TARGET_signal_E77EC": [subFragment1.content, subFragment2.content],
};

export function signal_E77EC(ev, sender, el) {
  const output = bitty.renderHTML(input, subs);
  const result = output.firstChild.children[1].innerHTML;
  if (result === "signal_E77EC") {
    el.innerHTML = bitty.localTimestamp();
  }
}
