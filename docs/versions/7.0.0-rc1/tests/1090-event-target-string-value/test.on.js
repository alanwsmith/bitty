export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1090(ev, el) {
    if (event.target.stringValue === "target string") {
      el.innerHTML = "PASSED";
    }
  }
}