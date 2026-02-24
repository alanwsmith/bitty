#key = "el_signal_299D6";

signal_299D6(_, el) {
  const result = this.deleteElement("el_299D6");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_299D6", `<div>ok</div>`);
  this.trigger("signal_299D6");
}