window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(payload, el) {
    const result = await this.fetchFragment(
      this.#key,
      payload.url,
      payload.fallback,
    );
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    } else {
      el.innerHTML = "bug";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  run_$SIGNAL_NAME(_, __) {
    const fallbackTemplate = document.createElement("template");
    fallbackTemplate.innerHTML = "<div>ok</div>";
    const url = "/intentionally-missing-file.html";
    this.send(
      { url: url, fallback: fallbackTemplate.content },
      "test_$SIGNAL_NAME",
    );
  }
};
