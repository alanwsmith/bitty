export const b = {};

export function $_SIGNAL_(_, __, el) {
  const input = ["<div></div>", "<div>$_TEST_ID_</div>"];
  const output = b.render(input);
  if (output.children[1].innerHTML === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
