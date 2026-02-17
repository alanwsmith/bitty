window.Class1E909 = class {
  bittyReady() {
    localStorage.setItem(
      "example-1E909",
      JSON.stringify({ data: { status: "ok" } }),
    );
    this.api.trigger("signal_1E909");
  }

  signal_1E909(_, el) {
    this.api.loadJSON("example-1E909");
    el.innerHTML = this.api.json("example-1E909").status;
    el.innerHTML = "todo";
  }
};
