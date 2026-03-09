export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  el.setProp("update", "$_TEST_ID_");
  if (el.dataset.update === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
