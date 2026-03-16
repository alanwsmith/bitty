export const b = {
  init: "init_$_TEST_ID_",
  templates: {
    template_$_TEST_ID_: `<div>Error loading page template in $_TEST_ID_</div>`,
  },
};

export function init_$_TEST_ID_(_, __, el) {
  el.replaceChildren(
    b.render("template_$_TEST_ID_"),
  );
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
