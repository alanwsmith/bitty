export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  localStorage.removeItem("$_TEST_ID_");
  b.save({}, "$_TEST_ID_");
  const data = localStorage.getItem("$_TEST_ID_");
  if (data === "{}") {
    el.innerHTML = b.time();
  }
}
