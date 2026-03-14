export const b = {};

export async function runTest() {
  await b.sleep(200);
  const checkEls = b.qsa("[data-r~=signal_5ADC2_v1]");
  checkEls.forEach((checkEl) => {
    checkEl.dataset.testStatus = -1;
  });
}
