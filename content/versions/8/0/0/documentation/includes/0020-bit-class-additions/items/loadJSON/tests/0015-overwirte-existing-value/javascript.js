signal_92D8A(_, el) {
  this.setLocalLogLevel("none");
  this.createJSON("json_signal_92D8A", { status: "test passed" });
  const result = this.loadJSON("json_signal_92D8A");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["json_signal_92D8A"].status;
  }
}