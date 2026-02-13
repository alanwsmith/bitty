window.ClassC0779 = class {
  #id = "id-C0779";
  #content = JSON.parse(`{ "status": "ok" }`);

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("signal_C0779");
  }

  signal_C0779(ev, el) {
    const json = this.api.json(this.#id);
    el.innerHTML = json.status;
  }
};
