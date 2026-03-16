export const b = {
  init: "init_C847E_v1",
  templates: {
    template_C847E_v1:
      `<button data-s="signal_C847E_v1">Send C847E_v1 from module template</button>`,
  },
};

export function init_C847E_v1(_, __, el) {
  el.replaceChildren(
    b.render("template_C847E_v1"),
  );
}

export function signal_C847E_v1(_, __, el) {
  el.innerHTML = b.time();
}
