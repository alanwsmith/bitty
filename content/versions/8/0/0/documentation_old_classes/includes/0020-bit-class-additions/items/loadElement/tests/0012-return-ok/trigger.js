async bittyReady() {
  this.sleep(100);
  this.setLocalLogLevel("none");
  this.setGlobalLogLevel("none");
  this.deleteElement("el_BB0D2");
  this.createElement("el_BB0D2", `<div>ok</div>`);
  delete this._element["el_BB0D2"];
  this.qs("[data-send~=signal_BB0D2]").click();
}
