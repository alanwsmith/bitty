export const bitty = {};

const input = [
  document.createDocumentFragment(),
  document.createDocumentFragment(),
];
const child0 = document.createElement("div");
input[0].appendChild(child0);
const child1 = document.createElement("div");
child1.innerHTML = "$_TEST_ID_";
input[1].appendChild(child1);

export function $_SIGNAL_(_, __, el) {
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
