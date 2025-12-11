export default class {
  bittyReady() {
    this.api.querySelector("div").click();
  }

  runTest1320(ev, _el) {
    if (ev.ds("key") === "test1320") {
      ev.target.innerHTML = "PASSED";
    }
  }
}
