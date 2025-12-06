export default class {
  #updates = 0;

  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1360Alfa(ev, el) {
    if (el.senderBittyId) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1360Bravo(ev, el) {
    if (el.senderBittyId === el.parentNode.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}