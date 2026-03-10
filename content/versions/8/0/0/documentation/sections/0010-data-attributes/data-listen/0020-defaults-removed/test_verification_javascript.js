export const b = {};

export async function runTest(_, __, ___) {
  b.qs("[data-s~=signal_66EA5_v1]").click();
  b.sleep(200);
  const pattern = /won't change on click/;
  const checkEls = b.qsa("[data-r~=signal_66EA5_v1]");
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
