export const b = {};

export function $_SIGNAL_(_, __, el) {
  const key = "$_TEST_ID_";
  b.savePage({ alfa: "bravo" }, key);
  const data = b.loadPage(key);
  if (data.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
