export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, _el) {
    this.api.querySelector("div").innerHTML = event.target.dataset.status;
  }
}
