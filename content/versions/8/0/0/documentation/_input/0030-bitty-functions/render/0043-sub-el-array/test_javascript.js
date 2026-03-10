export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_$_SIGNAL_";
input.appendChild(newEl);

const subEl1 = document.createElement("div");
subEl1.innerHTML = "UPDATED";
const subEl2 = document.createElement("div");
subEl2.innerHTML = "$_SIGNAL_";

const subs = {
  "TARGET_$_SIGNAL_": [subEl1, subEl2],
};

export function $_SIGNAL_(ev, sender, el) {
  const output = bitty.render(input, subs);
  if (output.firstChild.children[1].innerHTML === "$_SIGNAL_") {
    el.innerHTML = bitty.time();
  }
}
