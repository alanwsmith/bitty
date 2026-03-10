export const bitty = {};

const input = ["<div></div>", "<div>EDB2D_v1</div>"];

export function signal_EDB2D_v1(_, __, el) {
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "EDB2D_v1") {
    el.innerHTML = bitty.time();
  }
}
