export const b = { init: "grid" };

export function grid(_, __, el) {
  for (let i = 0; i < 16; i += 1) {
    el.appendChild(b.render("button"));
  }
}

export function clicked(_, __, el) {
  if (el.isSender() === true) {
    el.innerHTML = "HERE";
  } else {
    el.innerHTML = "-";
  }
}