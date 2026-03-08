export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (bitty.modKeyAliases().alt === "altKey") {
    el.innerHTML = bitty.time();
  }
}
