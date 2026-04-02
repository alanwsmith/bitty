export const b = {};

export async function runTest() {
  // no click necessary. this is triggered via
  // the b = { init: "signal_0F980_v1" }
  //b.qs("[data-s~=signal_0F980_v1]").click();
  await b.sleep(400);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=signal_0F980_v2]");
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
