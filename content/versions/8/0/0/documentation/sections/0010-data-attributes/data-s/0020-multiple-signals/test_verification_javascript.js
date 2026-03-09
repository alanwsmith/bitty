export const bitty = {};

export async function runTest(_, __, ___) {
  bitty.qs("[data-s~=signal_91921_v1").click();
  bitty.qs("[data-s~=signal_91921_v2").click();
  bitty.sleep(200);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_91921_v1]");
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
  const checkEls2 = bitty.qsa("[data-r~=signal_91921_v2]");
  checkEls2.forEach((checkEl) => {
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
