window.$CLASS_NAME = class {
  #id = "$ID_NAME";
  #content = `<div>ok</div>`;

  bittyReady() {
    this.api.addElement(this.#id, this.#content);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const html = this.api.element(this.#id);
    el.innerHTML = html.innerHTML;
  }
};
