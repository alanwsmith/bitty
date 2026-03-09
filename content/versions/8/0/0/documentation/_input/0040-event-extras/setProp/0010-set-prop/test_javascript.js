export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  ev.setProp("update", "$_ID_");
  if (ev.target.dataset.update === "$_ID_") {
    el.innerHTML = bitty.time();
  }
}
