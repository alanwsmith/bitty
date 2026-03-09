export const bitty = {};

export function loadSampleDatasignal_FBA10_v1() {
  bitty.save("FBA10_v1", { alfa: "bravo" });
}

export async function runTest() {
  bitty.qs("[data-s~=signal_FBA10_v1]").click();
  await bitty.sleep(200);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_FBA10_v1]");
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
