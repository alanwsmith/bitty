export const b = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_$_SIGNAL_";
input.appendChild(newEl);

const subEl = document.createElement("div");
subEl.innerHTML = "UPDATED_$_SIGNAL_";

const subs = {
  "TARGET_$_SIGNAL_": subEl,
};

export function $_SIGNAL_(ev, sender, el) {
  const output = b.render(input, subs);
  const checkEl = output.firstChild;
  if (checkEl.firstChild.innerHTML === "UPDATED_$_SIGNAL_") {
    el.innerHTML = b.time();
  }
}
