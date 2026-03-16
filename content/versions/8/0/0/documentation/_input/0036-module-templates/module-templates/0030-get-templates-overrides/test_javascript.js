export const b = {
  init: "init_$_TEST_ID_",
  templates: {
    moduleTemplateOverwrite:
      `<div>Error loading page template in $_TEST_ID_</div>`,
  },
};

export async function init_$_TEST_ID_(_, __, el) {
  const url = `/versions/8/0/0/documentation/samples/module-template-override/`;
  await b.getTemplates(url);
  el.replaceChildren(
    b.render("moduleTemplateOverwrite"),
  );
}

export function signal_moduleTemplateOverwrite(_, __, el) {
  el.innerHTML = b.time();
}
