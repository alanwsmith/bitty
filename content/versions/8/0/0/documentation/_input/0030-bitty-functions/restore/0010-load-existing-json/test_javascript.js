export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const json = b.restore("$_TEST_ID_");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
