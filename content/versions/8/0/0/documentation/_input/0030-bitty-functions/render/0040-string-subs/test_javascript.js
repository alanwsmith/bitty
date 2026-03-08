export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_$_SIGNAL_";
input.appendChild(newEl);

const subs = {
  "TARGET_$_SIGNAL_": "UPDATED_$_SIGNAL_",
};

export function $_SIGNAL_(ev, sender, el) {
  const output = bitty.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.innerHTML === "UPDATED_$_SIGNAL_") {
    el.innerHTML = bitty.time();
  }
}
