export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propBool("key") === true) {
    el.innerHTML = b.time();
  }
}
