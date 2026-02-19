window.ClassBC589 = class {
  bittyReady() {
    this.trigger("given_signal_BC589");
  }

  given_signal_BC589(_, __) {
    this.setLogLevel("none");
    this.removeElement("el_signal_BC589");
    this.trigger("test_signal_BC589");
  }

  test_signal_BC589(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    const result = this.loadElement("el_signal_BC589", newFragment);
    console.log(result);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = this.element["el_signal_BC589"].innerHTML;
    }
  }
};
