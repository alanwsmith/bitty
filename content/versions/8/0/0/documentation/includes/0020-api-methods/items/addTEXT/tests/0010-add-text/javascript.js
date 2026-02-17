window.ClassDD649 = class {
  bittyReady() {
    this.api.addTEXT("id-DD649", "ok");
    this.api.trigger("signal_DD649");
  }

  signal_DD649(ev, el) {
    el.innerHTML = this.text["id-DD649"];
  el.innerHTML = "todo";
  }
};
