window.$CLASS_NAME = class {
  #id = "$ID_NAME";
  #content = JSON.parse(`{ "status": "ok" }`);

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const json = this.api.json(this.#id);
    el.innerHTML = json.status;
  }
};
