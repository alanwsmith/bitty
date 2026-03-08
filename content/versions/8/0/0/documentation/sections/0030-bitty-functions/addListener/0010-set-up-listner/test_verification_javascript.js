export const bitty = {};

export async function runTest() {
  const testEvent = new TestEvent_signal_376FE();
  dispatchEvent(testEvent);
  await bitty.sleep(100);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_376FE]");
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

class TestEvent_signal_376FE extends Event {
  constructor(signals) {
    super("event_signal_376FE", { bubbles: true });
  }
}
