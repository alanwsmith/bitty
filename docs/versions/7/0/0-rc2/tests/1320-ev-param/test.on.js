export default class {
  bittyReady() {
    this.api.querySelector("div").click();
  }

  runTest1320(ev, _el) {
    if (ev.param("key") === "test1320") {
      ev.target.innerHTML = "PASSED";
    }
  }
}