export const b = { init: "initDarkMode" };

export function initDarkMode(_, __, el) {
  const data = b.loadData("colorMode", { theme: "auto", contrast: "" });
  const themes = ["auto", "light", "dark"];
  el.replaceChildren(
    ...themes.map((theme) => {
      const subs = {
        __ACTIVE__: data.theme === theme,
        __THEME__: theme,
      };
      return b.render("modeButton", subs);
    }),
  );
}

export function setMode(_, sender, el) {
  b.saveData("colorMode", { theme: sender.prop("theme"), contrast: "" });
  switchColorStyles();
  if (sender.prop("theme") === el.prop("theme")) {
    el.setProp("active", "true");
  } else {
    el.setProp("active", "false");
  }
}
