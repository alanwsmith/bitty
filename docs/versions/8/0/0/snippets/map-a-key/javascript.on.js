export const b = { init: "mapA" };

let count = 0;

export function mapA() {
  b.mapKey("a", "pressed");
}

export function pressed(_, __, el) {
  count += 1;
  el.innerHTML = count;
}