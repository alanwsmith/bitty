export const b = { init: "init" };

const url = `/[@ [file.parent, 'templates']|join("/") + "/" @]`;

export async function init(_, __, el) {
  const data = await b.getTemplates(url);
  if (data) {
    el.replaceWith(b.render("remote-template"));
  } else {
    el.innerHTML = "Could not load templates";
  }
}
