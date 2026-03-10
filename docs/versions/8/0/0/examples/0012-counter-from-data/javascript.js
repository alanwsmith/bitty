export const bitty = {};

export function plusOne(_, __, el) {
  const newCount = el.propAsInt("count") + 1;
  el.setProp("count", newCount);
  el.innerHTML = newCount;
}
