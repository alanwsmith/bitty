window.ClassADD80 = class {
  #id = "id-ADD80";
  #content = `{ "status": "ok" }`;

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("signal_ADD80");
  }

  signal_ADD80(ev, el) {
    const json = this.api.json(this.#id);
    el.innerHTML = json.status;
  }
};
