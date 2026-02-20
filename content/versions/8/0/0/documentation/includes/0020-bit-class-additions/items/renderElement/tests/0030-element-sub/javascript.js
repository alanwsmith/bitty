window.ClassAB8CB = class {
  #key = "el_signal_AB8CB";

  test_signal_AB8CB(_, el) {
    const replacementEl = document.createElement("div");
    replacementEl.classList.add("test");
    replacementEl.innerHTML = "ok";
    const subs = {
      "TARGET_AB8CB": replacementEl,
    };
    el.replaceWith(
      this.renderElement(this.#key, subs),
    );
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.createElement(this.#key, `<div>TARGET_AB8CB</div>`);
    this.trigger("test_signal_AB8CB");
  }
};
