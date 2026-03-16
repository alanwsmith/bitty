export const b = {};

export function signal_FBA10_v1(ev, sender, el) {
  localStorage.setItem("FBA10_v1", JSON.stringify({ alfa: "bravo" }));
  const json = b.load("FBA10_v1");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
