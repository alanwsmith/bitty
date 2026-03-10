export const bitty = {};

export function signal_68377_v1(_, __, el) {
  const input = "<div>NEEDLE</div>";
  const replacements = [
    "<div>68377_v1</div>",
    document.createElement("div"),
    document.createDocumentFragment(),
  ];
  replacements[1].innerHTML = "68377_v2";
  const child2 = document.createElement("div");
  child2.innerHTML = "68377_v3";
  replacements[2].appendChild(child2);

  const output = bitty.render(input, {
    "NEEDLE": replacements,
  }).firstChild;
  if (
    output.children[0].innerHTML === "68377_v1" &&
    output.children[1].innerHTML === "68377_v2" &&
    output.children[2].innerHTML === "68377_v3"
  ) {
    el.innerHTML = bitty.time();
  }
}
