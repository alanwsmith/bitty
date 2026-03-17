export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.aria("label") === "$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
