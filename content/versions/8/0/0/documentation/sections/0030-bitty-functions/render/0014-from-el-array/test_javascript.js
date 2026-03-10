export const bitty = {};

const input = [
  document.createElement("div"),
  document.createElement("div"),
];
input[1].innerHTML = "8F598_v1";

export function signal_8F598_v1(_, __, el) {
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "8F598_v1") {
    el.innerHTML = bitty.time();
  }
}
