export default class {
  #updates = 0;

  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1360Alfa(ev, el) {
    if (ev.sender.bittyId !== undefined) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1360Bravo(ev, el) {
    if (ev.sender.bittyId === el.parentNode.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}
