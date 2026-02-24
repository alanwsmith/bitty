#key = "json_signal_B76EB";

signal_B76EB(_, el) {
  // const result = this.createJSON("el_B76EB", { status: "ok" });
  // if (result.ok === true && result.level === "warn") {
  //   el.innerHTML = this.json["el_B76EB"].status;
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteJSON("el_B76EB");
  this.createJSON("el_B76EB", { status: "bug" });
  this.trigger("signal_B76EB");
}
