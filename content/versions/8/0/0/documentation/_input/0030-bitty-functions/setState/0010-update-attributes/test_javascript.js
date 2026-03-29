export const b = {};

export function $_SIGNAL_(_, __, el) {
  const payload = [
    { id: "target_$_TEST_ID_", attributes: { "aria-hidden": "true" } },
  ];
  b.setState(payload);
  const checkEl = b.qs("#target_$_TEST_ID_");
  if (checkEl.getAttribute("aria-hidden") === "true") {
    el.innerHTML = b.time();
  }
}
