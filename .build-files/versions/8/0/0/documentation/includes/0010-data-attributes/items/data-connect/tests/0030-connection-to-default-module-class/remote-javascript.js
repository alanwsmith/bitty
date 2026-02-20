export default class {
  bittyReady() {
    this.trigger("signal_15881");
  }

  signal_15881(_, el) {
    el.innerHTML = "ok";
  }
}
