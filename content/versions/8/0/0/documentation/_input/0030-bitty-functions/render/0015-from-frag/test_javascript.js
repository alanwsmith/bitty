export const b = {};

export function $_SIGNAL_(_, __, el) {
  const input = document.createDocumentFragment();
  const newEl = document.createElement("div");
  newEl.innerHTML = "$_TEST_ID_";
  input.appendChild(newEl);
  const output = b.render(input);
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
