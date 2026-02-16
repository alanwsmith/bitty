window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addTEXT("$ID_NAME", "$EXAMPLE_NAME");
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    console.log(this.text);
    if (this.text["$ID_NAME"] === "$EXAMPLE_NAME") {
      el.innerHTML = "ok";
    }
  }
};
