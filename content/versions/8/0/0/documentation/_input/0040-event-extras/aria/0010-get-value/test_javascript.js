export const b = {};

export function $_SIGNAL_(ev, __, el) {
  if (ev.aria("label") === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
