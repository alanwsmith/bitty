export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const result = bitty.save("$_TEST_ID_", {});
  el.innerHTML = bitty.time();
}
