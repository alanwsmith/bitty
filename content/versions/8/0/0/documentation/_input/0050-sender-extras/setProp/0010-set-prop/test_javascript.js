export const b = {};

export function $_SIGNAL_(_, sender, el) {
  sender.setProp("update", "$_TEST_ID_");
  if (sender.dataset.update === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
