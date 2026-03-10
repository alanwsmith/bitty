export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  ev.setProp("update", "$_TEST_ID_");
  if (ev.target.dataset.update === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
