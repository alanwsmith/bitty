export const b = { init: "controls" };

export function controls(_, __, el) {
  el.replaceChildren(b.render("controls"));
}

export function sort(ev, __, el) {
  const books = [...b.qsa(".book", el)]
    .sort((alfa, bravo) => {
      return b.qs(`.${ev.val()}`, alfa).textContent.localeCompare(
        b.qs(`.${ev.val()}`, bravo).textContent,
      );
    });
  el.replaceChildren(...books);
}