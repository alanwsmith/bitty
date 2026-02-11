class TestEventClass9CE5F extends Event {
  constructor() {
    super("bittytest", { bubbles: true });
  }
}

window.Class9CE5F = class {
  bittyReady() {
    const testSender = document.querySelector(".el-9CE5F");
    const testEvent = new TestEventClass9CE5F();
    testSender.dispatchEvent(testEvent);
  }

  signal_9CE5F(_, el) {
    el.innerHTML = "ok";
  }
};
