#key = "json_signal_41D2B";

signal_41D2B(_, el) {
  // this.loadJSON("el_41D2B");
  // el.innerHTML = this.json["el_41D2B"].status;
}


bittyReady() {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteJSON("el_41D2B");
  this.createJSON("el_41D2B", { status: "ok" });
  // delete this.json["el_41D2B"];
  // this.trigger("signal_41D2B");
}
