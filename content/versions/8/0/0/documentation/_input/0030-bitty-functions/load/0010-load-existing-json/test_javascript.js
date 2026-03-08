export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const json = bitty.load("$_TEST_ID_");
  if (json.alfa === "bravo") {
    el.innerHTML = bitty.time();
  }
}
