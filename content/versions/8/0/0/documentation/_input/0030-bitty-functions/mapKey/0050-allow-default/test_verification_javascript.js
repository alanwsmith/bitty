export const bitty = {};

export async function runTest() {
  await bitty.sleep(200);
  const event_signal_6E38F = new KeyboardEvent("keydown", {
    key: "/",
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event_signal_6E38F);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=$_SIGNAL_]");
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
