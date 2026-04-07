export const b = { init: "init" };

const url = `/versions/8/0/0/snippets/get-remote-data/data.json`;

export async function init(_, __, el) {
  const data = await b.getData(url);
  if (data) {
    el.innerHTML = data.status;
  } else {
    el.innerHTML = "could not load data";
  }
}