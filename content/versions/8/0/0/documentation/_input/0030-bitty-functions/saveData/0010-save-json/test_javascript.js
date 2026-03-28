export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  b.saveData({}, "$_TEST_ID_");
  const data = b.loadData("$_TEST_ID_");
  if (JSON.stringify(data) === "{}") {
    el.innerHTML = b.time();
  }
}
