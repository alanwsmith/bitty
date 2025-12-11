export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1270(ev, el) {
    if (el.senderBittyId = el.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}
