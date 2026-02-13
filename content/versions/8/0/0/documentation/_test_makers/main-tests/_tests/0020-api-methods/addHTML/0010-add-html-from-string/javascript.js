window.$CLASS_NAME = class {
  #id = "$ID_NAME";
  #content = `<div>ok</div>`;

  bittyReady() {
    this.api.addHTML(this.#id, this.#content);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const html = this.api.html(this.#id);
    if (this.api.html(this.#id).status === "ok") {
      el.innerHTML = "ok";
    }
  }
};
