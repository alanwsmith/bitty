export const b = {};

export function $_SIGNAL_(_, __, el) {
  const input = "<div>$_TEST_ID_</div>";
  const output = b.render(input);
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
