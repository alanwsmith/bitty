async bittyReady() {
  this.sleep(100);
  const testEvent = new TestEvent$CLASS_NAME();
  dispatchEvent(testEvent);
}


