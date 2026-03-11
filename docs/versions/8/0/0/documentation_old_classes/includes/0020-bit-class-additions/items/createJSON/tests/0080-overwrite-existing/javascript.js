
signal_B76EB(_, el) {
  this.setLocalLogLevel("none");
  this.deleteJSON("el_B76EB");
  this.createJSON("el_B76EB", { status: "bug" });
  const result = this.createJSON("el_B76EB", { status: "test passed" });
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = this.json["el_B76EB"].status;
  }
}

