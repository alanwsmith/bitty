export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  localStorage.setItem("$_TEST_ID_", JSON.stringify({ alfa: "bravo" }));
  const json = b.restore("$_TEST_ID_");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
