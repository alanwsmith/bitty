export const b = {};

export async function signal_B5E30_v1(ev, sender, el) {
  const t1 = performance.now();
  await b.sleep(100);
  const t2 = performance.now();
  if (t2 - t1 > 80) {
    el.innerHTML = b.time();
  }
}
