window.$CLASS_NAME = class {
  #_id = "$ID_NAME";
  #_content = "content-$HASH";

  bittyReady() {
    this.api.addTEXT(
      this.#_id,
      this.#_content,
    );
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    if (this.api.text(this.#_id) === this.#_content) {
      el.innerHTML = "ok";
    }
  }
};
