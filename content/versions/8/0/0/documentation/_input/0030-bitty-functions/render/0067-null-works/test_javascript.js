export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const checkEl = b.render("template_$_TEST_ID_", {
    __NULL__: null,
  });
  if (checkEl.firstChild.innerHTML === "null") {
    el.innerHTML = b.time();
  }
}
