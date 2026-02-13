export class ExampleClass {
  bittyReady() {
    this.api.trigger("signal_CD4FD");
  }

  signal_CD4FD(_, el) {
    el.innerHTML = "ok";
  }
}
