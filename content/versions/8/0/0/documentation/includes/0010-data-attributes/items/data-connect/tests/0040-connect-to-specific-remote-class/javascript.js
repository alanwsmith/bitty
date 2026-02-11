export class ExampleClass {
  bittyReady() {
    this.api.trigger("signal_12d9b");
  }

  signal_12d9b(_, el) {
    el.innerHTML = "PASSED";
  }
}
