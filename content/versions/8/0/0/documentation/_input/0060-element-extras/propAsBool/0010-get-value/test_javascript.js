export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propAsBool("key") === true) {
    el.innerHTML = b.time();
  }
}
