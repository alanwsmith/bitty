export const bitty = {};

export function signal_8F598_v1(_, __, el) {
  const input = [
    document.createElement("div"),
    document.createElement("div"),
  ];
  input[1].innerHTML = "8F598_v1";
  const output = bitty.render(input);
  if (output.children[1].innerHTML === "8F598_v1") {
    el.innerHTML = bitty.time();
  }
}
