window.ClassF598E = class {
  bittyReady() {
    localStorage.setItem(
      "example-F598E",
      JSON.stringify({ data: { status: "ok" } }),
    );
    this.api.trigger("signal_F598E");
  }

  signal_F598E(_, el) {
    this.api.loadJSON("example-F598E");
    el.innerHTML = this.api.json("example-F598E").status;
  }
};
