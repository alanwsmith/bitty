export const b = { init: "renderSVG" };

export function renderSVG(_, __, el) {
  const subs = { __TEXT__: "svg" };
  el.replaceChildren(
    b.render("snippet-svg", subs),
  );
}
