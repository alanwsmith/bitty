export const b = {};

export function $_SIGNAL_(_, sender, el) {
  const subs = { __TEXT__: "svg" };
  const svg = b.render("svg_$_TEST_ID_", subs);
  if (b.qs("text", svg).textContent === "svg") {
    el.innerHTML = b.time();
    sender.replaceChildren(svg);
  }
}
