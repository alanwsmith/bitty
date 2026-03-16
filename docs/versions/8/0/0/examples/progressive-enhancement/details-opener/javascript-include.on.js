



export const b = { init: "initDetails" };

let data;
let key = `details-opener`;

export function initDetails() {
  data = b.loadPage(key, []);
  b.qsa("details").forEach((el, index) => {
    el.open = data[index] ? true : false;
    el.addEventListener("toggle", (_) => updateData());
  });
}

function updateData() {
  b.qsa("details").forEach((el, index) => {
    data[index] = el.open;
  });
  b.savePage(key, data);
}