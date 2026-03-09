export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (el.val() === "Input $_TEST_ID_") {
    el.innerHTML = bitty.time();
  }
}
