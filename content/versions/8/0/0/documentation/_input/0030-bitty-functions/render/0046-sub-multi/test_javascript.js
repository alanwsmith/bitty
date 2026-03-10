export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  const input = "<div>NEEDLE</div>";
  const replacements = [
    "<div>$_TEST_ID_</div>",
    document.createElement("div"),
    document.createDocumentFragment(),
  ];
  replacements[1].innerHTML = "$_TEST2_ID_";
  const child2 = document.createElement("div");
  child2.innerHTML = "$_TEST3_ID_";
  replacements[2].appendChild(child2);

  const output = bitty.render(input, {
    "NEEDLE": replacements,
  }).firstChild;
  if (
    output.children[0].innerHTML === "$_TEST_ID_" &&
    output.children[1].innerHTML === "$_TEST2_ID_" &&
    output.children[2].innerHTML === "$_TEST3_ID_"
  ) {
    el.innerHTML = bitty.time();
  }
}
