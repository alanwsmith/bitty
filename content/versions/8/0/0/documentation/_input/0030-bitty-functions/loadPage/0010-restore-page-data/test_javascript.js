export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const key = "data_$_TEST_ID_";
  b.savePage(key, { alfa: "bravo" });
  const data = b.loadPage(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
