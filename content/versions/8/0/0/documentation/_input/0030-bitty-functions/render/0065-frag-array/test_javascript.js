export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_$_SIGNAL_";
input.appendChild(newEl);

const subFragment1 = document.createElement("template");
subFragment1.innerHTML = "<div>UPDATED</div>";

const subFragment2 = document.createElement("template");
subFragment2.innerHTML = "<div>$_SIGNAL_</div>";

const subs = {
  "TARGET_$_SIGNAL_": [subFragment1.content, subFragment2.content],
};

export function $_SIGNAL_(ev, sender, el) {
  const output = bitty.render(input, subs);
  const result = output.firstChild.children[1].innerHTML;
  if (result === "$_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
