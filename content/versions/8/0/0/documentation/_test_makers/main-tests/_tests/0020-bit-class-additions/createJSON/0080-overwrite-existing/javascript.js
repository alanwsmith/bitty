#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  // const result = this.createJSON(this.#key, { status: "ok" });
  // if (result.ok === true && result.level === "warn") {
  //   el.innerHTML = this.json[this.#key].status;
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteJSON(this.#key);
  this.createJSON(this.#key, { status: "bug" });
  this.trigger("test_$SIGNAL_NAME");
}
