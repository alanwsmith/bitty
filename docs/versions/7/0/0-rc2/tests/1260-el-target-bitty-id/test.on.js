export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }
  runTest1260(ev, el) {
    if (ev.bittyId === el.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}