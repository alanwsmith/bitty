class TestEvent extends Event {
  constructor() {
    super("bittytest", { bubbles: true });
  }
}

window.$CLASS_NAME = class {
  bittyReady() {
    const testSender = document.querySelector(".$CLICK_CLASS");
    const testEvent = new TestEvent();
    testSender.dispatchEvent(testEvent);
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
