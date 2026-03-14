export const b = {};

export async function runTestWithErrors() {
  await b.sleep(100);
  b.trigger("init_$_TEST_ID_");
  const event_signal_6E38F = new KeyboardEvent("keydown", {
    key: "t",
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event_signal_6E38F);
  await b.sleep(100);
  const pattern = /there's no output from this example./;
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
