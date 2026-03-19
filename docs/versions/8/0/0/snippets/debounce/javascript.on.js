export const b = {};

let count = 0;

export function start(ev, __, el) {
  ev.target.innerHTML = "waiting for debounce to resolve";
  b.debounce("snippet", "end", 2000);
}

export function end(_, __, el) {
  count += 1;
  el.innerHTML = `debounce has resolved to count ${count}`;
}