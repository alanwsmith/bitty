export const bitty = {};

const input = [
  "<div>8CA16_v1</div>",
  document.createElement("div"),
  document.createDocumentFragment(),
];
input[1].innerHTML = "8CA16_v1";
const child2 = document.createElement("div");
child2.innerHTML = "8CA16_v1";
input[2].appendChild(child2);

export function signal_8CA16_v1(_, __, el) {
  const output = bitty.render(input);
  if (
    output.children[0].innerHTML === "8CA16_v1" &&
    output.children[1].innerHTML === "8CA16_v1" &&
    output.children[2].innerHTML === "8CA16_v1"
  ) {
    el.innerHTML = bitty.time();
  }
}
