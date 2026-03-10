export const bitty = {};

const input = [
  document.createElement("div"),
  document.createElement("div"),
];
input[1].innerHTML = "$_TEST_ID_";

export function $_SIGNAL_(_, __, el) {
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
