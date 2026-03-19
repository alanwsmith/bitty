export const b = { init: "initDarkMode" };

export function initDarkMode(_, __, el) {
  const subs = {
    __PREPEND__: "dark mode",
    __SEND__: "toggleDarkMode",
  };
  el.replaceChildren(b.switch(subs));
}

export function toggleDarkMode(_, __, el) {
  console.log("dark");
}
