window.ClassEFEFA = class {
  #key = "el_signal_EFEFA";

  async signal_EFEFA(_, el) {
    const url = "/intentionally-missing-file.html";
    const result = await this.fetchElement(this.#key, url);
    if (result.level === "error" && result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
