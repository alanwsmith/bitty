export const b = {
  init: "init_235BC_v1",
};

export async function init_235BC_v1(_, __, el) {
  const t1 = performance.now();
  await b.sleep(100);
  const t2 = performance.now();
  if ((t2 - t1) > 80) {
    el.innerHTML = b.time();
  }
}
