export const b = {};

export function signal_9F4E9_v1(ev, sender, el) {
  const checkEl = b.render("template_9F4E9_v1", {
    __NULL__: null,
  });
  if (checkEl.firstChild.innerHTML === "null") {
    el.innerHTML = b.time();
  }
}
