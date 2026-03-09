export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (sender.val() === "Input $_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
