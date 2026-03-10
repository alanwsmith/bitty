export const bitty = {};


export function $_SIGNAL_(_, __, el) {
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
