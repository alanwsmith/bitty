export const b = {
  init: "initDetails",
};

let data = [];
let key = `details-opener-${window.location.pathname}`;

export function initDetails() {
  data = b.load(key);
  document.querySelectorAll("details").forEach((el, index) => {
    el.open = data[index] ? true : false;
    el.addEventListener("toggle", (_) => {
      updateData();
    });
  });
}

function updateData() {
  document.querySelectorAll("details").forEach((el, index) => {
    data[index] = el.open;
  });
  b.save(key, data);
}
