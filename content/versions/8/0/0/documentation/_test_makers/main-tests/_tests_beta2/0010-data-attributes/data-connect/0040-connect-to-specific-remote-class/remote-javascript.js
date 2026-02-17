export class ExampleClass {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
}
