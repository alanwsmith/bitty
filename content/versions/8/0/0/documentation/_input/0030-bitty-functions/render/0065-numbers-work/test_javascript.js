export const b = {};

export function $_SIGNAL_(_, __, el) {
  const checkEl = b.render("test_$_TEST_ID_", {
    __FLOAT__: 1.1,
  });
  if (checkEl.firstChild.innerHTML = "1.1") {
    el.innerHTML = b.time();
  }
}
