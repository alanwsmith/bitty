window.Class027DC = class {
  bittyReady() {
    this.trigger("given_signal_027DC");
  }

  given_signal_027DC(_, __) {
    this.addJSON("data_signal_027DC", `{}`);
    this.trigger("test_signal_027DC");
  }

  test_signal_027DC(_, el) {
    this.removeJSON("data_signal_027DC");
    if (this.json["data_signal_027DC"] === undefined) {
      el.innerHTML = "ok";
    }
  }
};
