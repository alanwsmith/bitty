export default class {
  bittyReady() {
    this.api.trigger("signal_dcbe7");
  }

  signal_dcbe7(_, el) {
    el.innerHTML = "PASSED";
  }
}
