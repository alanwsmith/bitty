export const bitty = {};

const input = "<div>NEEDLE</div>";

export function signal_A40A5_v1(_, __, el) {
  const output = bitty.tee(bitty.render(input, {
    "NEEDLE": "A40A5_v1",
  }));
  if (output.children[0].innerHTML === "A40A5_v1") {
    el.innerHTML = bitty.time();
  }
}
