export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propFloat("key") === 2.2) {
    el.innerHTML = b.time();
  }
}
