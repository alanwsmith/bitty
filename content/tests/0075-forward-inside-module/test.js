export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest(event, _el) {
    this.api.send(event, "forward");
  }

  forward(event, el) {
    el.innerHTML = "PASSED";
  }
}
