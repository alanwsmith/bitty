export const b = {};

export function $_SIGNAL_(_, __, el) {
  const payload = [
    { id: "target_$_TEST_ID_", keys: { value: "update_$_TEST_ID_" } },
  ];
  b.setState(payload);
  const checkEl = b.qs("#target_$_TEST_ID_");
  if (checkEl.value === "update_$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
