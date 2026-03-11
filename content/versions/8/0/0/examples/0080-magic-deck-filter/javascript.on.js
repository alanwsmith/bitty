export const b = {
  init: "deck",
};

export async function deck(_, __, el) {
  // const data = await b.fetchData("/[@ file.parent @]/data.json");
  // await b.fetchTemplates("/[@ file.parent @]/templates.html");
  el.innerHTML = "[@ file.parent @]";
}
