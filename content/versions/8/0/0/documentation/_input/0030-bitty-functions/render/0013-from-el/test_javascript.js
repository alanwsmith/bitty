export const b = {};

export function $_SIGNAL_(_, __, el) {
  const input = document.createElement("div");
  input.innerHTML = "$_TEST_ID_";
  const output = b.render(input);
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
