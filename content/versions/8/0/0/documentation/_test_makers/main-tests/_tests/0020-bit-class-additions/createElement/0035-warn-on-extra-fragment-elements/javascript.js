#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div></div>`;
  const result = this.createElement(this.#key, template.content);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}