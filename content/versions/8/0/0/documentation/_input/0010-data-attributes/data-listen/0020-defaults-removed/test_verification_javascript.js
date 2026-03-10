export const bitty = {};

export async function runTest(_, __, ___) {
  bitty.qs("[data-s~=$_SIGNAL_]").click();
  bitty.sleep(200);
  const pattern = /won't change on click/;
  const checkEls = bitty.qsa("[data-r~=$_SIGNAL_]");
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
