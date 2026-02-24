signal_77D07(_, el) {
  this.setLocalLogLevel("none");
  this.deleteElement("el_77D07");
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div></div>`;
  const result = this.loadElement("el_77D07", template.content);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}
