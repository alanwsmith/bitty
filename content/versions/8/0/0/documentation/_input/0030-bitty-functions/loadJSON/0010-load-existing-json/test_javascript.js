export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  bitty.saveJSON("$_TEST_ID_", {});
  const result = bitty.loadJSON("$_TEST_ID_");
  if (result.status === "ok") {
    el.innerHTML = bitty.localTimestamp();
  }
}
