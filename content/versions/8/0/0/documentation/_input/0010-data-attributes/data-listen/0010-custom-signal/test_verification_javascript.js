export const b = {};

export async function runTest() {
  await b.sleep(200);

  const event_$_SIGNAL_ = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  b.qs("[data-s~=$_SIGNAL_]").dispatchEvent(event_$_SIGNAL_);

  // add to innerHTML as well for the visual update.
  // It doesn't affect the test. It helps avoid
  // confusion that would occur if there was
  // nothing in the div after the test was run.
  b.qs("[data-s~=$_SIGNAL_]").innerHTML = "a";

  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=$_SIGNAL_]");
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
