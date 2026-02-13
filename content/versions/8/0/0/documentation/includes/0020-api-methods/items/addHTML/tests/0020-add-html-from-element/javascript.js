window.Class45A5A = class {
  #id = "id-45A5A";

  bittyReady() {
    const element = this.generateElement();
    this.api.addHTML(this.#id, element);
    this.api.trigger("signal_45A5A");
  }

  generateElement() {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = "<div>ok</div>";
    const el = skeleton.content.cloneNode(true);
    return el.firstChild;
  }

  signal_45A5A(ev, el) {
    const html = this.api.html(this.#id);
    el.innerHTML = html.querySelector("div").innerHTML;
  }
};
