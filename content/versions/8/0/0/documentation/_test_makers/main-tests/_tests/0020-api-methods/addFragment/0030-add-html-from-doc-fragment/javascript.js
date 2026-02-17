window.$CLASS_NAME = class {
  #id = "$ID_NAME";

  bittyReady() {
    const fragment = this.generateFragment();
    this.api.addHTML(this.#id, fragment);
    this.api.trigger("$SIGNAL_NAME");
  }

  generateFragment() {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = "<h1>title</h1><div>ok</div>";
    return skeleton.content.cloneNode(true);
  }

  $SIGNAL_NAME(ev, el) {
    const html = this.api.html(this.#id);
    el.innerHTML = html.querySelector("div").innerHTML;
  el.innerHTML = "todo";
  }
};
