export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  bitty.saveJSON("$_TEST_ID_", { alfa: "bravo" });
  const json = bitty.loadJSON("$_TEST_ID_");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
