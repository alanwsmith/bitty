export const b = { init: "init" };

const url = `/[@ [file.parent, 'data.json']|join("/")|safe @]`;

export async function init(_, __, el) {
  const data = await b.getData(url);
  if (data) {
    el.innerHTML = data.status;
  } else {
    el.innerHTML = "could not load data";
  }
}
