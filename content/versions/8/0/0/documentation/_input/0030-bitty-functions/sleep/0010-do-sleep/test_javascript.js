export const bitty = {};

export async function $_SIGNAL_(ev, sender, el) {
  const t1 = performance.now();
  await bitty.sleep(100);
  const t2 = performance.now();
  if (t2 - t1 > 80) {
    el.innerHTML = bitty.time();
  }
}
