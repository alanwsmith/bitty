window.ClassAB8CB = class {
  #key = "el_signal_AB8CB";

  bittyReady() {
    this.trigger("given_signal_AB8CB");
  }

  given_signal_AB8CB(_, __) {
    this.addElement(this.#key, `<div>TARGET_AB8CB</div>`);
    this.trigger("test_signal_AB8CB");
  }

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
};
