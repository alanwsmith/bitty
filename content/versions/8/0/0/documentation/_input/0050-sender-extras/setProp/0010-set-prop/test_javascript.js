export const bitty = {};

export function $_SIGNAL_(_, sender, el) {
  sender.setProp("update", "$_TEST_ID_");
  if (sender.dataset.update === "$_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
