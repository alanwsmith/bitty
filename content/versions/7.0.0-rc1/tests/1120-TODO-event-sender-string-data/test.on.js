export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1120(ev, el) {
    // TODO: change to event.senderStringData(KEY)
    if (event.sender.stringValue === "target string") {
      el.innerHTML = "PASSED";
    }
  }
}
