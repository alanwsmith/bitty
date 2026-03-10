export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_signal_76437_v1";
input.appendChild(newEl);

const subFragment1 = document.createElement("template");
subFragment1.innerHTML = "<div>UPDATED</div>";

const subFragment2 = document.createElement("template");
subFragment2.innerHTML = "<div>signal_76437_v1</div>";

const subs = {
  "TARGET_signal_76437_v1": [subFragment1.content, subFragment2.content],
};

export function signal_76437_v1(ev, sender, el) {
  const output = bitty.render(input, subs);
  const result = output.firstChild.children[1].innerHTML;
  if (result === "signal_76437_v1") {
    el.innerHTML = bitty.time();
  }
}
