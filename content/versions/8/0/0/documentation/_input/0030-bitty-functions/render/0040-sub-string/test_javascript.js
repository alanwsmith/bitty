export const b = {};

const input = "<div>NEEDLE</div>";

export function $_SIGNAL_(_, __, el) {
  const output = b.render(input, { "NEEDLE": "$_TEST_ID_" });
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
