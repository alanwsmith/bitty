export const b = {
  init: "init_35974_v1",
  templates: {
    template_35974_v1: `<div>Error loading page template in 35974_v1</div>`,
  },
};

export function init_35974_v1(_, __, el) {
  el.replaceChildren(
    b.render("template_35974_v1"),
  );
}

export function signal_35974_v1(_, __, el) {
  el.innerHTML = b.time();
}
