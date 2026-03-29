export const b = {};

export function signal_37935_v1(_, __, el) {
  const payload = [
    { id: "target_37935_v1", keys: { value: "update_37935_v1" } },
  ];
  b.setState(payload);
  const checkEl = b.qs("#target_37935_v1");
  if (checkEl.value === "update_37935_v1") {
    el.innerHTML = b.time();
  }
}
