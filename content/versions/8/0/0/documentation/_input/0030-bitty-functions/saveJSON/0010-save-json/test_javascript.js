export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const result = bitty.saveJSON("$_TEST_ID_", {});
  el.innerHTML = bitty.localTimestamp();
}
