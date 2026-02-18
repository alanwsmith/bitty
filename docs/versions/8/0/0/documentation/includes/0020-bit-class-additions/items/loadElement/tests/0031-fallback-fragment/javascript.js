window.ClassBC589 = class {
  bittyReady() {
    this.trigger("given_signal_BC589");
  }

  given_signal_BC589(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_BC589");
  }

  test_signal_BC589(_, el) {
    const newFragment = document.createElement("template");
    newFragment.innerHTML = "<div>ok</div><div>ignored</div>";
    const result = this.loadElement("el_signal_BC589", newFragment.content);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = this.element["el_signal_BC589"].innerHTML;
    }
  }
};
