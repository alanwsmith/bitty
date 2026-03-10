export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (b.modKeyAliases().alt === "altKey") {
    el.innerHTML = b.time();
  }
}
