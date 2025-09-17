export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    el.innerHTML = event.target.dataset.status;
  }
}
