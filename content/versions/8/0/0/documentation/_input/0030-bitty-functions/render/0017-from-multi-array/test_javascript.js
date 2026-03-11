export const b = {};

const input = [
  "<div>$_TEST_ID_</div>",
  document.createElement("div"),
  document.createDocumentFragment(),
];
input[1].innerHTML = "$_TEST_ID_";
const child2 = document.createElement("div");
child2.innerHTML = "$_TEST_ID_";
input[2].appendChild(child2);

export function $_SIGNAL_(_, __, el) {
  const output = b.render(input);
  if (
    output.children[0].innerHTML === "$_TEST_ID_" &&
    output.children[1].innerHTML === "$_TEST_ID_" &&
    output.children[2].innerHTML === "$_TEST_ID_"
  ) {
    el.innerHTML = b.time();
  }
}
