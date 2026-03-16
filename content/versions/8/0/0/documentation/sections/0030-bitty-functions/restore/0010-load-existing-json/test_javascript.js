export const b = {};

export function signal_83167_v1(ev, sender, el) {
  localStorage.setItem("83167_v1", JSON.stringify({ alfa: "bravo" }));
  const json = b.restore("83167_v1");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
