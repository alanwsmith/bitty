export const b = {};

export function $_SIGNAL_(_, sender, el) {
  sender.setAria("checked", true);
  if (sender.ariaBool("checked") === true) {
    el.innerHTML = b.time();
  }
}
