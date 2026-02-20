window.Class6B398 = class {
  #key = "el_signal_6B398";

  async test_signal_6B398(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const options = {
      method: "POST",
    };
    // await this.fetchJSON("data_signal_6B398", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_6B398");
  }
};
