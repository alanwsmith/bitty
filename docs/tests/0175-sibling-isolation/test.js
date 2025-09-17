export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    el.innerHTML = `PASSED_${el.dataset.name}`;
  }
}
