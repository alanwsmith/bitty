export const b = { init: "loadSampleDatasignal_0AF4D_v1" };

export function loadSampleDatasignal_0AF4D_v1() {
  localStorage.setItem("invalid_signal_0AF4D_v1", "not a valid json string");
}

export async function runTestWithErrors() {
  b.qs("[data-s~=signal_0AF4D_v1]").click();
  await b.sleep(200);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=signal_0AF4D_v1]");
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
