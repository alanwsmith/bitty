bittyReady() {
  const testSender = document.querySelector(".el-9CE5F");
  const testEvent = new TestEventClass9CE5F();
  testSender.dispatchEvent(testEvent);
}

signal_9CE5F(_, el) {
  el.innerHTML = "ok";
}

 This test uses a custom event instead of
 something like mouseover to facilitate
 automated test output.
ass TestEventClass9CE5F extends Event {
constructor() {
  super("bittylocallistenertest", { bubbles: true });
}
