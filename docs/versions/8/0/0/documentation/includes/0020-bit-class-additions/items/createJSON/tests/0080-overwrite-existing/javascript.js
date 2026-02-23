#key = "json_signal_B76EB";

test_signal_B76EB(_, el) {
  // const result = this.createJSON(this.#key, { status: "ok" });
  // if (result.ok === true && result.level === "warn") {
  //   el.innerHTML = this.json[this.#key].status;
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteJSON(this.#key);
  this.createJSON(this.#key, { status: "bug" });
  this.trigger("test_signal_B76EB");
}
