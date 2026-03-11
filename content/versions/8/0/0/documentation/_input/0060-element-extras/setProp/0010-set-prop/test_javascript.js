export const b = {};

export function $_SIGNAL_(_, __, el) {
  el.setProp("update", "$_TEST_ID_");
  if (el.dataset.update === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
