export const b = {
  init: "init_$_TEST_ID_",
  templates: {
    template_$_TEST_ID_:
      `<button data-s="$_SIGNAL_">Send $_TEST_ID_ from module template</button>`,
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
