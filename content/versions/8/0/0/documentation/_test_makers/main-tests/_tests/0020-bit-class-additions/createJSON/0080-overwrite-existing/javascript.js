#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const result = this.createJSON("el_$HASH", { status: "ok" });
  // if (result.ok === true && result.level === "warn") {
  //   el.innerHTML = this.json["el_$HASH"].status;
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteJSON("el_$HASH");
  this.createJSON("el_$HASH", { status: "bug" });
  this.trigger("$SIGNAL_NAME");
}
