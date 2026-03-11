export const b = {};

export function signal_7F9A6_v1(_, __, el) {
  const input = [
    document.createDocumentFragment(),
    document.createDocumentFragment(),
  ];
  const child0 = document.createElement("div");
  input[0].appendChild(child0);
  const child1 = document.createElement("div");
  child1.innerHTML = "7F9A6_v1";
  input[1].appendChild(child1);
  const output = b.render(input);
  if (output.children[1].innerHTML === "7F9A6_v1") {
    el.innerHTML = b.time();
  }
}
