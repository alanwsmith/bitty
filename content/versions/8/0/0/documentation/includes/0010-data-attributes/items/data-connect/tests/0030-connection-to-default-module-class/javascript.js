export default class {
  bittyReady() {
    this.api.trigger("signal_833ab");
  }

  signal_833ab(_, el) {
    el.innerHTML = "PASSED";
  }
}
