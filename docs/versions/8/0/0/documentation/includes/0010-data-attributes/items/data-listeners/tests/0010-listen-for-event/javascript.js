class TestEvent extends Event {
  constructor() {
    super("bittytest", { bubbles: true });
  }
}

window.Class9CE5F = class {
  bittyReady() {
    const testSender = document.querySelector(".el-9CE5F");
    const testEvent = new TestEvent();
    testSender.dispatchEvent(testEvent);
  }

  signal_9CE5F(_, el) {
    el.innerHTML = "ok";
  }
};
