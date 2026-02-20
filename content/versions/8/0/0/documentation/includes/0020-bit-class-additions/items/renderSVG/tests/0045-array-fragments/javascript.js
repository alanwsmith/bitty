window.Class0EB22 = class {
  #key = "fragment_signal_0EB22";

  test_signal_0EB22(_, el) {
    const template = document.createElement("template");
    template.innerHTML = "<div></div><div></div>";
    const template2 = document.createElement("template");
    template2.innerHTML = "<div></div><div>ok</div>";
    const replacementArray = [
      template.content,
      template2.content,
    ];
    const subs = {
      "TARGET_0EB22": replacementArray,
    };
    const fragment = this.renderFragment(this.#key, subs);
    //    el.innerHTML = fragment.firstChild.children[3].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_0EB22");
  }

  given_signal_0EB22(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div>TARGET_0EB22</div>`);
    this.trigger("test_signal_0EB22");
  }
};
