export const b = { init: "controls" };

export function controls(_, __, el) {
  el.replaceChildren(b.render("controls"));
}

export function sort(ev, __, el) {
  const books = [...b.qsa(".book", el)]
    .sort((alfa, bravo) => {
      return b.qs(`.${ev.target.value}`, alfa).textContent.localeCompare(
        b.qs(`.${ev.target.value}`, bravo).textContent,
      );
    });
  el.replaceChildren(...books);
}
