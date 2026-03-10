export const bitty = {};

export function signal_87F58_v1(_, __, el) {
  const input = "<div>87F58_v1</div>";
  const output = bitty.render(input);
  if (output.children[0].innerHTML === "87F58_v1") {
    el.innerHTML = bitty.time();
  }
}
