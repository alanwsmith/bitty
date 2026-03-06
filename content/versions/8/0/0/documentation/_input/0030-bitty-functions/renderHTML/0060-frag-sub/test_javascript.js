export const bitty = {};

const input = document.createDocumentFragment();
const newEl = document.createElement("div");
newEl.innerHTML = "TARGET_$_SIGNAL_";
input.appendChild(newEl);

const subFragment = document.createElement("template");
subFragment.innerHTML = "<div>UPDATED_$_SIGNAL_</div>";

const subs = {
  "TARGET_$_SIGNAL_": subFragment.content,
};

export function $_SIGNAL_(ev, sender, el) {
  const output = bitty.renderHTML(input, subs);
  if (output.firstChild.firstChild.innerHTML === "UPDATED_$_SIGNAL_") {
    el.innerHTML = bitty.localTimestamp();
  }
}
