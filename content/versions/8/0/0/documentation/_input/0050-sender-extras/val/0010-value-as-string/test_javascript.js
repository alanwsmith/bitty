export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.val() === "Input $_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
