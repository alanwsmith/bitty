export const bitty = {};

export async function runTest() {
  bitty.qs("[data-s~=signal_26E12_v1]").click();
  await bitty.sleep(200);
  const pattern = /\w{32}/;
  const checkEls = bitty.qsa("[data-r~=signal_26E12_v1]");
  checkEls.forEach((checkEl) => {
    if (checkEl.innerHTML === "todo") {
      checkEl.dataset.testStatus = 1;
    } else {
      const match = checkEl.innerHTML.match(pattern);
      if (match !== null) {
        checkEl.dataset.testStatus = 0;
      } else {
        checkEl.dataset.testStatus = 2;
      }
    }
  });
}
