window.ClassDBF25 = class {
  #key = "fragment_signal_DBF25";

  test_signal_DBF25(fragment, el) {
    this.addFragment(this.#key, fragment);
    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_DBF25");
  }

  given_signal_DBF25(_, __) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    element.innerHTML = "ok";
    fragment.appendChild(element);
    this.send(fragment, "test_signal_DBF25");
  }
};
