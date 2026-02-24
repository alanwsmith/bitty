#key = "element_signal_846F3";

signal_846F3(_, el) {
  const result = this.updateElement("el_846F3", `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_846F3", `<div></div>`);
  this.trigger("signal_846F3");
}