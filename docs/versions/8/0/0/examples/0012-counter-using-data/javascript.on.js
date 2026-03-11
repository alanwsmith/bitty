export const b = {};

export function up(_, __, el) {
  el.setProp("count", el.propAsInt("count") + 1);
  el.innerHTML = el.prop("count");
}