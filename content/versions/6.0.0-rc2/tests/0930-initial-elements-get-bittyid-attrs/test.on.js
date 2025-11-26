export default class {
  bittyReady() {
    this.api.trigger("runTest0930");
  }
  runTest0930(event, el) {
    const checkEl = this.api.querySelector(".add-id");
    if (checkEl.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}
