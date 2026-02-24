#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.updateElement("el_$HASH", {
    key: "not a string, element, or document fragment",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div></div>`);
  this.trigger("$SIGNAL_NAME");
}