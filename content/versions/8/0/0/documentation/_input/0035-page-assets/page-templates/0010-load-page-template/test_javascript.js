export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  if (b.templates["template_$_TEST_ID_"] !== undefined) {
    el.innerHTML = b.time();
  }
}
