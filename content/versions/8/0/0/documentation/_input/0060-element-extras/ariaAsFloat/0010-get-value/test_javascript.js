export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaAsFloat("valuenow") === 1.1) {
    el.innerHTML = b.time();
  }
}
