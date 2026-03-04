export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const json = bitty.loadJSON("$_TEST_ID_");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.localTimestamp();
  }
}
