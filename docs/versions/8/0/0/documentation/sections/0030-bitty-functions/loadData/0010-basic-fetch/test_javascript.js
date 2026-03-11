export const b = {};

export async function signal_B438C_v1(ev, sender, el) {
  const json = await b.loadData("/versions/8/0/0/documentation/samples/valid-json.json");
  if (json.alfa === "bravo") {
    el.innerHTML = b.time();
  }
}
