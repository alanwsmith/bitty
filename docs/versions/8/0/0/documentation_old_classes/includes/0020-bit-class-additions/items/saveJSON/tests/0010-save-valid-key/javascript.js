signal_E097F(_, el) {
  this.createJSON(this.key, { status: "bug" });
  this.json[this.key].status = "test passed";
  this.saveJSON(this.key);
  delete this.json[this.key];
  this.loadJSON(this.key);
  el.innerHTML = this.json[this.key].status;
}

