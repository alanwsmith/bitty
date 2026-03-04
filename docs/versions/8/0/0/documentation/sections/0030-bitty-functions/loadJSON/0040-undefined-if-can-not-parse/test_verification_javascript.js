export const bitty = {};

export function loadSampleDatasignal_D4C0E() {
  localStorage.setItem("invalid_signal_D4C0E", "not a valid json string");
}

export async function runTestWithErrors() {
  bitty.qs("[data-s~=signal_D4C0E]").click();
  await bitty.sleep(200);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_D4C0E]");
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
