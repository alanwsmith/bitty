export const b = {};

export function $_SIGNAL_(_, __, el) {
  const output = b.render("input");
  if (output.children[0].innerHTML === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
