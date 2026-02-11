export class ExampleClass {
  bittyReady() {
    this.api.trigger("signal_6bbb5");
  }

  signal_6bbb5(_, el) {
    el.innerHTML = "PASSED";
  }
}
