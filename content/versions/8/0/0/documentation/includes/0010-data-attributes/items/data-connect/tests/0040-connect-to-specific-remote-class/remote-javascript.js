export class ExampleClass {
  bittyReady() {
    this.api.trigger("signal_cd4fd");
  }

  signal_cd4fd(_, el) {
    el.innerHTML = "PASSED";
  }
}
