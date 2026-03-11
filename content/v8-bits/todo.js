export const bitty = {};

export function newItem(ev, __, el) {
  ev.preventDefault();
  const input = bitty.qs("input", ev.target);
  const text = input.value;
  const subs = { "TEXT": text };
  const template = bitty.templates["item"];
  const li = bitty.render(template, subs);
  el.appendChild(li);
  input.value = "";
}

export function deleteItems(_, __, el) {
  el.replaceChildren();
}
