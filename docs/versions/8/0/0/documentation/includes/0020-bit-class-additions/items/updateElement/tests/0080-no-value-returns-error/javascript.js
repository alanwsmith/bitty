#key = "element_signal_C95B6";

signal_C95B6(_, el) {
  const result = this.updateElement("el_C95B6");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_C95B6", `<div></div>`);
  this.trigger("signal_C95B6");
}