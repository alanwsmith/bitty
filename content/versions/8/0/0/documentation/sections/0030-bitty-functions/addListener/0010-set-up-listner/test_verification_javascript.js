export const b = {};

export async function runTest() {
  const testEvent = new TestEvent_signal_376FE_v1();
  dispatchEvent(testEvent);
  await b.sleep(100);
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = b.qsa("[data-r~=signal_376FE_v1]");
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

class TestEvent_signal_376FE_v1 extends Event {
  constructor(signals) {
    super("event_signal_376FE_v1", { bubbles: true });
  }
}
