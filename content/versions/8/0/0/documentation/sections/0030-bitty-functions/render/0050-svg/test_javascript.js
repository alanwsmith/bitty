export const b = {};

export function signal_58881_v1(_, sender, el) {
  const subs = { __TEXT__: "svg" };
  const svg = b.render("svg_58881_v1", subs);
  if (b.qs("text", svg).textContent === "svg") {
    el.innerHTML = b.time();
    sender.replaceChildren(svg);
  }
}
