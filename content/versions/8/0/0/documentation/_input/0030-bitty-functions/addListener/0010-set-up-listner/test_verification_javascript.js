export const b = {};

export async function runTest() {
  const testEvent = new TestEvent_$_SIGNAL_();
  dispatchEvent(testEvent);
  await b.sleep(100);
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

class TestEvent_$_SIGNAL_ extends Event {
  constructor(signals) {
    super("event_$_SIGNAL_", { bubbles: true });
  }
}
