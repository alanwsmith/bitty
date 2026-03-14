export const b = {
  init: "initCounter",
};

let count = 0;

export function initCounter(_, __, el) {
  el.innerHTML = count;
}

export function up(_, __, el) {
  count += 1;
  el.innerHTML = count;
}