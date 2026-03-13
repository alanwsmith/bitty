export const b = { init: "controls" };

const colors = ["red", "green", "blue"];

export function controls(_, __, el) {
  el.replaceChildren(
    ...colors.map((color) =>
      b.render("slider", {
        __COLOR__: color,
      })
    ),
  );
}

export function updateColor(ev, __, ___) {
  b.setCSS(`--${ev.prop("color")}`, ev.val);
}