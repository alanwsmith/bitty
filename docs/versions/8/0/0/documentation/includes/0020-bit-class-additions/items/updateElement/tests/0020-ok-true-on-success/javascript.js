#key = "element_signal_D4BFF";

signal_D4BFF(_, el) {
  const result = this.updateElement("el_D4BFF", `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_D4BFF", `<div class="test">bug</div>`);
  this.trigger("signal_D4BFF");
}