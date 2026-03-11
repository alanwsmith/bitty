export const b = {
  init: "init_$_TEST_ID_",
};

export async function init_$_TEST_ID_(_, __, el) {
  const t1 = performance.now();
  await b.sleep(100);
  const t2 = performance.now();
  if ((t2 - t1) > 80) {
    el.innerHTML = b.time();
  }
}
