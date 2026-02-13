window.ClassC0779 = class {
  #id = "id-C0779";
  #content = JSON.parse(`{ "status": "ok" }`);

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("signal_C0779");
  }

  signal_C0779(ev, el) {
    if (this.api.json(this.#id).status === "ok") {
      el.innerHTML = "ok";
    }
  }
};
