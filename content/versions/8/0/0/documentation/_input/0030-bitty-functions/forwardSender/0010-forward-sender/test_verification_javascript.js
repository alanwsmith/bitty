export const b = {};

export async function runTest() {
  // no click necessary. this is triggered via
  // the b = { init: "$_SIGNAL_" }
  //b.qs("[data-s~=$_SIGNAL_]").click();
  await b.sleep(400);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=$_SIGNAL2_]");
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
