window.Class84554 = class {
  #id = "id-84554";
  #content = `<div>ok</div>`;

  bittyReady() {
    this.api.addHTML(this.#id, this.#content);
    this.api.trigger("signal_84554");
  }

  signal_84554(ev, el) {
    const html = this.api.html(this.#id);
    el.innerHTML = html.querySelector("div").innerHTML;
  }
};
