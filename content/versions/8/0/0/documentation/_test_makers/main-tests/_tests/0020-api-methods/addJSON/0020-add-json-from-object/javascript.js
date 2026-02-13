window.$CLASS_NAME = class {
  #id = "$ID_NAME";
  #content = { status: "ok" };

  bittyReady() {
    this.api.addJSON(this.#id, this.#content);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    if (this.api.json(this.#id).status === "ok") {
      el.innerHTML = "ok";
    }
  }
};
