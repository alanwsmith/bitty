window.ClassE5DE2 = class {
  #id = "id-E5DE2";
  #content = { status: "ok" };

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("signal_E5DE2");
  }

  signal_E5DE2(ev, el) {
    if (this.api.json(this.#id).status === "ok") {
      el.innerHTML = "ok";
    }
  }
};
