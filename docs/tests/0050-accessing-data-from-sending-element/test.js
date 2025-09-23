export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest50(event, element) {
    console.log("----------------------");
    element.innerHTML = event.target.dataset.status;
  }
}
