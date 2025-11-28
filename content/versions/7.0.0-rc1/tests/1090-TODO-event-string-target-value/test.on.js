export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1090(ev, el) {
    // TODO: move to event.stringTargetValue
    if (event.target.stringValue === "target string") {
      el.innerHTML = "PASSED";
    }
  }
}
