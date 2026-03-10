export const bitty = {};

const input = ["<div></div>", "<div>$_TEST_ID_</div>"];

export function $_SIGNAL_(_, __, el) {
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}

