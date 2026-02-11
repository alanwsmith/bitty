export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest0100(event, el) {
    if (event.type === "click") {
      el.innerHTML = "PASSED";
    }
  }
}