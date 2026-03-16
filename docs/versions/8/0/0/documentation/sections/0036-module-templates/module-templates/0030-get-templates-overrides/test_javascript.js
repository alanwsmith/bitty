export const b = {
  init: "init_D5306_v1",
  templates: {
    moduleTemplateOverwrite:
      `<div>Error loading page template in D5306_v1</div>`,
  },
};

export async function init_D5306_v1(_, __, el) {
  const url = `/versions/8/0/0/documentation/samples/module-template-override/`;
  await b.getTemplates(url);
  el.replaceChildren(
    b.render("moduleTemplateOverwrite"),
  );
}

export function signal_moduleTemplateOverwrite(_, __, el) {
  el.innerHTML = b.time();
}
