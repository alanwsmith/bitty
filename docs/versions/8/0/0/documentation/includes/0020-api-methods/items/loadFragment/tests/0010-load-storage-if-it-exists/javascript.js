window.ClassF210B = class {
  bittyReady() {
    localStorage.setItem(
      "example-F210B",
      JSON.stringify({ data: { status: "ok" } }),
    );
    this.api.trigger("signal_F210B");
  }

  signal_F210B(_, el) {
    this.api.loadJSON("example-F210B");
    el.innerHTML = this.api.json("example-F210B").status;
    el.innerHTML = "todo";
  }
};
