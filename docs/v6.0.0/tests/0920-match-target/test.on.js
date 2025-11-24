export default class {
  bittyReady() {
    [...this.api.querySelectorAll("div")].forEach((d) => {
      d.click();
    });
  }
  runTest0920Alfa(event, el) {
    if (this.api.matchTarget(event, el)) {
      el.innerHTML = "PASSED";
    }
  }

  runTest0920Bravo(event, el) {
    if (this.api.matchTarget(event, el, "datakey")) {
      el.innerHTML = "PASSED";
    }
  }
}