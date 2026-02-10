export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }
  runTest1070Alfa(_event, el) {
    if (el.bittyParent.bittyId === this.api.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
  runTest1070Bravo(_event, el) {
    if (el.bittyParent.dataset.bittyid === this.api.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}
