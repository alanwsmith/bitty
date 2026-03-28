export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaFloat("valuenow") === 1.1) {
    el.innerHTML = b.time();
  }
}
