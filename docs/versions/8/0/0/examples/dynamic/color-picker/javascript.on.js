export const b = { init: "controls" };

const colors = { red: 90, green: 40, blue: 150 };

export function controls(_, __, el) {
  el.replaceChildren(
    ...Object.keys(colors).map((color) => {
      b.setCSS(`--${color}`, colors[color]);
      const subs = {
        __COLOR__: color,
        __VALUE__: `${colors[color]}`,
      };
      return b.render("slider", subs);
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
  colors[ev.target.prop("color")] = ev.target.valueInt();
  b.setCSS(`--${ev.target.prop("color")}`, ev.target.valueInt());
  b.trigger("output");
}