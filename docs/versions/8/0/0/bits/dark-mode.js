export const b = { init: "initDarkMode" };

let data;

export function initDarkMode(_, __, el) {
  data = b.load("colorMode");
  el.replaceChildren(
    b.render("modeButtons"),
  );
}

export function setMode(_, sender, __) {
  b.save("colorMode", { theme: sender.prop("mode"), contrast: "" });
  switchColorStyles();
}
