export const b = { init: "controls" };

const colors = { red: 90, green: 40, blue: 150 };

export function controls(_, __, el) {
  el.replaceChildren(
    ...Object.keys(colors).map((color) => {
      b.setCSS(`--${color}`, colors[color]);
      return b.render("slider", {
        __COLOR__: color,
        __VALUE__: `${colors[color]}`,
      });
    }),
  );
  b.trigger("output");
}

export function copy(_, sender, el) {
  b.quickCopy(el, sender);
}

export function output(_, __, el) {
  el.innerHTML = `rgb(${colors.red} ${colors.green} ${colors.blue})`;
}

export function updateColor(ev, __, ___) {
  colors[ev.prop("color")] = ev.valAsFloat;
  b.setCSS(`--${ev.prop("color")}`, ev.val);
  b.trigger("output");
}
