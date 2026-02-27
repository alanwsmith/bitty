export const bitty = {};

let data = [];

export function initDetails() {
  const result = bitty.loadJSON(key());
  data = result.status === "ok" ? result.value : [];
  if (
    data.length !==
      document.querySelectorAll("details").length
  ) {
    data = [];
  }
  openDetails();
}

function key() {
  return `details-opener-${window.location.pathname}`;
}

function openDetails() {
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
  bitty.saveJSON(key(), data);
}
