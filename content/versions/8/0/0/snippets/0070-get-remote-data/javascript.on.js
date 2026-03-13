export const b = { init: "init" };

const url = `/[@ [file.parent, 'data.json']|join("/")|safe @]`;

export async function init(_, __, el) {
  const data = await b.loadData(url);
  if (data === undefined) {
    el.innerHTML = "could not load data";
  } else {
    el.innerHTML = data.status;
  }
}
