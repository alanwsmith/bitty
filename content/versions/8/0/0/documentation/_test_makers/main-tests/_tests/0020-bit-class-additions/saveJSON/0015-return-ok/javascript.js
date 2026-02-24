$SIGNAL_NAME(_, el) {
  this.key = "data_$HASH";
  this.createJSON(this.key, { status: "bug" });
  this.json[this.key].status = "test passed";
  this.saveJSON(this.key);
  const result = this.saveJSON(this.key);
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}

