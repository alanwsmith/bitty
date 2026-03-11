$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.setGlobalLogLevel("none");
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div></div>`;
  const result = this.createElement("el_$HASH", template.content);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
}
