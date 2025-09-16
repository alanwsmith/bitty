export class AltClass {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, _event) {
    el.innerHTML = "PASSED";
  }
}
