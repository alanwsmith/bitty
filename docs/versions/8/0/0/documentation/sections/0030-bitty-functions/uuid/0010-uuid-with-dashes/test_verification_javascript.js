export const bitty = {};

export async function runTest() {
  bitty.qs("[data-s~=signal_B5C78]").click();
  await bitty.sleep(200);
  const pattern = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/;
  const checkEls = bitty.qsa("[data-r~=signal_B5C78]");
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
