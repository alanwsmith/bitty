export const b = { init: "init" };

const url = `/versions/8/0/0/snippets/get-remote-templates/templates/`;

export async function init(_, __, el) {
  const data = await b.getTemplates(url);
  if (data) {
    el.replaceWith(b.render("remote-template"));
  } else {
    el.innerHTML = "Could not load templates";
  }
}