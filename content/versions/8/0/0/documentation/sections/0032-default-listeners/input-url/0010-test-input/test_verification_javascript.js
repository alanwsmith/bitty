export const b = {};

export async function runTest() {
  await b.sleep(200);
  const checkEls = b.qsa("[data-r~=signal_D3EA6_v1]");
  checkEls.forEach((checkEl) => {
    checkEl.dataset.testStatus = -1;
  });
}
