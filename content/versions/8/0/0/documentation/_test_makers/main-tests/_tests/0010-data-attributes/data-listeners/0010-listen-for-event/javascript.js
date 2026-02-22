bittyReady() {
  const testSender = document.querySelector(".$CLICK_CLASS");
  const testEvent = new TestEvent$CLASS_NAME();
  testSender.dispatchEvent(testEvent);
}

$SIGNAL_NAME(_, el) {
  el.innerHTML = "ok";
}

 // This test uses a custom event instead of
 // something like mouseover to facilitate
 // automated test output.


// TODO: Move this out to it's own file 
// class TestEvent$CLASS_NAME extends Event {
//   constructor() {
//   super("bittylocallistenertest", { bubbles: true });
// }
