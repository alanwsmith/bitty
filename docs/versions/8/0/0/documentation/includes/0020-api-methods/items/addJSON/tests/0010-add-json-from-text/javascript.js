window.ClassADD80 = class {
  #id = "id-ADD80";
  #content = `{ "status": "ok" }`;

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("signal_ADD80");
  }

  signal_ADD80(ev, el) {
    if (this.api.json(this.#id).status === "ok") {
      el.innerHTML = "ok";
    }
  }
};
