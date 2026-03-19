export const b = { init: "loadSVG" };

const colors = ["red", "green", "blue"];

export function loadSVG(_, __, el) {
  el.replaceChildren(
    ...colors.map((color) => {
      const subs = { __COLOR__: color };
      return b.render("snippetSVG", subs);
    }),
  );
}