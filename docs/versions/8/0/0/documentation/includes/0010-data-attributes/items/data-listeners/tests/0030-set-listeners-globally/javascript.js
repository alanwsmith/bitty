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

class TestEventClassAC896 extends Event {
  constructor() {
    super("bittygloballistenertest", { bubbles: true });
  }
}
