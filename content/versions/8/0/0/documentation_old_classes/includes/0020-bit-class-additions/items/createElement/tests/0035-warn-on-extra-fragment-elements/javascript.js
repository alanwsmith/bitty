signal_4C991(_, el) {
  this.setLocalLogLevel("none");
  this.setGlobalLogLevel("none");
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div></div>`;
  const result = this.createElement("el_4C991", template.content);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
}
