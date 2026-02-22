bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.createJSON(
    "json_$SIGNAL_NAME",
    { status: "ok" },
  );
  this.trigger("test_$SIGNAL_NAME");
}

test_$SIGNAL_NAME(_, el) {
  const result = this.loadJSON("json_$SIGNAL_NAME");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["json_$SIGNAL_NAME"].status;
  }
}