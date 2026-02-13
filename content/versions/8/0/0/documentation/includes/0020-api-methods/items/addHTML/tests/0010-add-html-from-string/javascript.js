window.Class54575 = class {
  #id = "id-54575";
  #content = `<div>ok</div>`;

  bittyReady() {
    this.api.addHTML(this.#id, this.#content);
    this.api.trigger("signal_54575");
  }

  signal_54575(ev, el) {
    const html = this.api.html(this.#id);
    el.innerHTML = html.querySelector("div").innerHTML;
  }
};
