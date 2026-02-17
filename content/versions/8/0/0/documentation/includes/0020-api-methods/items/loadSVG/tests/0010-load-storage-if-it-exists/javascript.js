window.Class0DBB7 = class {
  bittyReady() {
    localStorage.setItem(
      "example-0DBB7",
      JSON.stringify({ data: { status: "ok" } }),
    );
    this.api.trigger("signal_0DBB7");
  }

  signal_0DBB7(_, el) {
    this.api.loadJSON("example-0DBB7");
    el.innerHTML = this.api.json("example-0DBB7").status;
    el.innerHTML = "todo";
  }
};
