export const bitty = {};

export async function runTest() {
  await bitty.sleep(200);

  const event_signal_6E38F_v1 = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  bitty.qs("[data-s~=signal_6E38F_v1]").dispatchEvent(event_signal_6E38F_v1);

  // add to innerHTML as well for the visual update.
  // It doesn't affect the test. It helps avoid
  // confusion that would occur if there was
  // nothing in the div after the test was run.
  bitty.qs("[data-s~=signal_6E38F_v1]").innerHTML = "a";

  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_6E38F_v1]");
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
