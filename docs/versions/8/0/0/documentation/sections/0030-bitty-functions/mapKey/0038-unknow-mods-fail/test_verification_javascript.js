export const bitty = {};

export async function runTestWithErrors() {
  await bitty.sleep(200);
  bitty.trigger("setKey_signal_273EF_v1");
  const event_signal_6E38F = new KeyboardEvent("keydown", {
    key: "t",
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event_signal_6E38F);
  const pattern = /there's no output from this example./;
  const checkEls = bitty.qsa("[data-r~=signal_273EF_v1]");
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
