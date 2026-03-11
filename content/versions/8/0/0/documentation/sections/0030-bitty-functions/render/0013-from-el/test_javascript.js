export const b = {};

export function signal_46394_v1(_, __, el) {
  const input = document.createElement("div");
  input.innerHTML = "46394_v1";
  const output = b.render(input);
  if (output.children[0].innerHTML === "46394_v1") {
    el.innerHTML = b.time();
  }
}
