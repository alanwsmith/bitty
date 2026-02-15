window.Class0CF85 = class {
  #id = "id-0CF85";
  #content = `<div>ok</div>`;

  bittyReady() {
    this.api.addElement(this.#id, this.#content);
    this.api.trigger("signal_0CF85");
  }

  signal_0CF85(ev, el) {
    const html = this.api.element(this.#id);
    el.innerHTML = html.innerHTML;
  }
};
