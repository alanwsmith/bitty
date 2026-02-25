
$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteJSON("el_$HASH");
  this.createJSON("el_$HASH", { status: "bug" });
  const result = this.createJSON("el_$HASH", { status: "test passed" });
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["el_$HASH"].status;
  }
}

