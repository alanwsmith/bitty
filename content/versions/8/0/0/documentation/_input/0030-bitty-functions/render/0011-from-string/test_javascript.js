export const bitty = {};

const input = "<div>$_TEST_ID_</div>";

export function $_SIGNAL_(_, __, el) {
  const output = bitty.render(input);
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
