export default class {
  bittyReady() {
    this.api.trigger("runTest1410");
  }

  runTest1410(ev, el) {
    if (ev.sender.dataset.bittyid === this.api.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}