window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const newFragment = document.createElement("template");
    newFragment.innerHTML = "<div>ok</div><div>ignored</div>";
    const result = this.loadElement("el_$SIGNAL_NAME", newFragment.content);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = this.element["el_$SIGNAL_NAME"].innerHTML;
    }
  }
};
