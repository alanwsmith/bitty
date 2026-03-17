export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const checkEl = b.render("template_$_TEST_ID_", {
    __BOOLEAN__: true,
  });
  if (checkEl.firstChild.innerHTML === "true") {
    el.innerHTML = b.time();
  }
}
