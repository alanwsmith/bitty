window.Class51040 = class {
  #key = "key_signal_51040";

  test_signal_51040(update, el) {
    el.innerHTML = this.json[this.#key].status;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_51040");
  }
};
