window.ClassAC896 = class {
  bittyReady() {
    const testSender = document.querySelector(".el-AC896");
    const testEvent = new TestEventClassAC896();
    testSender.dispatchEvent(testEvent);
  }

  signal_AC896(_, el) {
    el.innerHTML = "ok";
  }
};

// This test uses a custom event instead of
// something like mouseover to facilitate
// automated test output.
class TestEventClassAC896 extends Event {
  constructor() {
    super("bittygloballistenertest", { bubbles: true });
  }
}
