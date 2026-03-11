window.$CLASS_NAME = class {
  bittyReady() {
    localStorage.setItem(
      "$EXAMPLE_NAME",
      JSON.stringify({ data: { status: "ok" } }),
    );
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    this.api.loadJSON("$EXAMPLE_NAME");
    el.innerHTML = this.api.json("$EXAMPLE_NAME").status;
    el.innerHTML = "todo";
  }
};
