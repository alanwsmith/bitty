#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div></div>`;
  const result = this.loadElement("el_$HASH", template.content);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}