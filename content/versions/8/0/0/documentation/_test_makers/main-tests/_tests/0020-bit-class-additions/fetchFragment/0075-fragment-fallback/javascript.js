window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(payload, el) {
    await this.fetchFragment(this.#key, payload.url, payload.fallback);
    el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const fallbackTemplate = document.createElement("template");
    fallbackTemplate.innerHTML = "<div>ok</div>";
    console.log(fallbackTemplate);
    const url = "/intentionally-missing-file.html";
    this.send(
      { url: url, fallback: fallbackTemplate.content },
      "test_$SIGNAL_NAME",
    );
  }
};
