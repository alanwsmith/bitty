export const bitty = {};

export function $_SIGNAL_(_, sender, el) {
  sender.setProp("update", "$_ID_");
  if (sender.dataset.update === "$_ID_") {
    el.innerHTML = bitty.time();
  }
}
