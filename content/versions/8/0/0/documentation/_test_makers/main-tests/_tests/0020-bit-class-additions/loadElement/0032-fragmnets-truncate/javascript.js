#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div></div>`;
  const result = this.loadElement(this.#key, template.content);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("$SIGNAL_NAME");
}