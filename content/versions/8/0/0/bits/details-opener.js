export const b = { init: "initDetails" };

let data;
let key = `details-opener`;

export async function initDetails() {
  data = await b.loadPageData(key, []);
  b.qsa("details").forEach((el, index) => {
    el.open = data[index] ? true : false;
    el.addEventListener("toggle", (_) => updateData());
  });
}

async function updateData() {
  b.qsa("details").forEach((el, index) => {
    data[index] = el.open;
  });
  await b.savePageData(data, key);
}
