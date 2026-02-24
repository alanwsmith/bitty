bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createJSON(
    "json_$SIGNAL_NAME",
    { status: "test passed" },
  );
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, el) {
  const result = this.loadJSON("json_$SIGNAL_NAME");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["json_$SIGNAL_NAME"].status;
  }
}