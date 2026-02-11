window.$CLASS_NAME = class {
  bittyReady() {
    const testSender = document.querySelector(".$CLICK_CLASS");
    const testEvent = new TestEvent$CLASS_NAME();
    testSender.dispatchEvent(testEvent);
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};

class TestEvent$CLASS_NAME extends Event {
  constructor() {
    super("bittylocallistenertest1", { bubbles: true });
  }
}
