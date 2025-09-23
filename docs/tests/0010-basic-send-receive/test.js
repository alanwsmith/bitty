export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest(_event, el) {
    el.innerHTML = "PASSED";
  }
}
