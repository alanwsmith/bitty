$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.createJSON("json_$SIGNAL_NAME", { status: "test passed" });
  const result = this.loadJSON("json_$SIGNAL_NAME");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["json_$SIGNAL_NAME"].status;
  }
}