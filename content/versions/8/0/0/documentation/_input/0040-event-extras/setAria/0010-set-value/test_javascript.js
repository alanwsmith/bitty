export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  ev.setAria("label", "$_TEST_ID_");
  if (ev.aria("label") === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
