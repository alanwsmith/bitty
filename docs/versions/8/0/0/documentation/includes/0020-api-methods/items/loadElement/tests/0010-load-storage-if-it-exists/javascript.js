window.Class6EF8D = class {
  bittyReady() {
    localStorage.setItem(
      "example-6EF8D",
      JSON.stringify({ data: { status: "ok" } }),
    );
    this.api.trigger("signal_6EF8D");
  }

  signal_6EF8D(_, el) {
    this.api.loadJSON("example-6EF8D");
    el.innerHTML = this.api.json("example-6EF8D").status;
    el.innerHTML = "todo";
  }
};
