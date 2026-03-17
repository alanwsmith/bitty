export const b = {};

export function signal_A9D87_v1(ev, sender, el) {
  const checkEl = b.render("template_A9D87_v1", {
    __BOOLEAN__: true,
  });
  if (checkEl.firstChild.innerHTML === "true") {
    el.innerHTML = b.time();
  }
}
