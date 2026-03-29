export const b = {};

export function signal_95950_v1(_, __, el) {
  const payload = [
    { id: "target_95950_v1", attributes: { "aria-hidden": "true" } },
  ];
  b.setState(payload);
  const checkEl = b.qs("#target_95950_v1");
  if (checkEl.getAttribute("aria-hidden") === "true") {
    el.innerHTML = b.time();
  }
}
