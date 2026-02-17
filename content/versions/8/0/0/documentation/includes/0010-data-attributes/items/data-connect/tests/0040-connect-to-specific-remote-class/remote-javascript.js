export class ExampleClass {
  bittyReady() {
    this.trigger("signal_CD4FD");
  }

  signal_CD4FD(_, el) {
    el.innerHTML = "ok";
  }
}
