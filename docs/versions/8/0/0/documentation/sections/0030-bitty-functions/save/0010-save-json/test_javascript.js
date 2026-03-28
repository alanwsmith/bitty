export const b = {};

export function signal_799B4_v1(ev, sender, el) {
  localStorage.removeItem("799B4_v1");
  b.save({}, "799B4_v1");
  const data = localStorage.getItem("799B4_v1");
  if (data === "{}") {
    el.innerHTML = b.time();
  }
}
