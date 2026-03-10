export const bitty = {};

const input = "<div>NEEDLE</div>";

export function $_SIGNAL_(_, __, el) {
  const output = bitty.tee(bitty.render(input, {
    "NEEDLE": "$_TEST_ID_",
  }));
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
