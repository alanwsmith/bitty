export const b = {};

export function signal_393D6_v1(ev, sender, el) {
  b.saveData({}, "393D6_v1");
  const data = b.loadData("393D6_v1");
  if (JSON.stringify(data) === "{}") {
    el.innerHTML = b.time();
  }
}
