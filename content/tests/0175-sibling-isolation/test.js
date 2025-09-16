export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    el.innerHTML = `PASSED_${el.dataset.name}`;
  }
}
