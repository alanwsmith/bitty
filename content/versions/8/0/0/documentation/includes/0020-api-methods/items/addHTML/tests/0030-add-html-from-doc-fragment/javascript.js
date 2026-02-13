window.ClassCC3CE = class {
  #id = "id-CC3CE";

  bittyReady() {
    const fragment = this.generateFragment();
    this.api.addHTML(this.#id, fragment);
    this.api.trigger("signal_CC3CE");
  }

  generateFragment() {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = "<h1>title</h1><div>ok</div>";
    return skeleton.content.cloneNode(true);
  }

  signal_CC3CE(ev, el) {
    const html = this.api.html(this.#id);
    el.innerHTML = html.querySelector("div").innerHTML;
  }
};
