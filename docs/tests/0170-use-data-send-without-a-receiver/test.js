export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    this.api.querySelector("div").innerHTML = event.target.dataset.status;
  }
}
