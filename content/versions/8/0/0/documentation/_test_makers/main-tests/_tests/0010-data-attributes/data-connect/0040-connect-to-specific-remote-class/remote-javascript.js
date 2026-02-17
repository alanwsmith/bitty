export class ExampleClass {
  bittyReady() {
    this.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
}
