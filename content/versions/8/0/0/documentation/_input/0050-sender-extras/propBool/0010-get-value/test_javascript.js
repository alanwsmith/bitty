export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propBool("key") === true) {
    el.innerHTML = b.time();
  }
}
