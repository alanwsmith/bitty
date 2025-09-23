export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest50(event, element) {
    element.innerHTML = event.target.dataset.status;
  }
}
