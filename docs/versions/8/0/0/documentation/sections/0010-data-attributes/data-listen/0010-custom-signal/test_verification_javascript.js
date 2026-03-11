export const b = {};

export async function runTest() {
  await b.sleep(200);

  const event_signal_0C853_v1 = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  b.qs("[data-s~=signal_0C853_v1]").dispatchEvent(event_signal_0C853_v1);

  // add to innerHTML as well for the visual update.
  // It doesn't affect the test. It helps avoid
  // confusion that would occur if there was
  // nothing in the div after the test was run.
  b.qs("[data-s~=signal_0C853_v1]").innerHTML = "a";

  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=signal_0C853_v1]");
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
