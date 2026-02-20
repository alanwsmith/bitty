window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.addElement("el_$SIGNAL_NAME", "<div>bug</div>");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.addElement("el_$SIGNAL_NAME", "<div>ok</div>");
    if (result.level === "warn") {
      //el.innerHTML = this.element["el_$SIGNAL_NAME"].innerHTML;
    }
  }
};
