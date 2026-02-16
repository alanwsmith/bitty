window.ClassADD80 = class {
  #id = "id-ADD80";
  #content = `{ "status": "ok" }`;

  bittyReady() {
    this.api.addJSON("id-ADD80", `{ "status": "ok"}`);
    this.api.trigger("signal_ADD80");
  }

  signal_ADD80(ev, el) {
    el.innerHTML = this.json["id-ADD80"].status;
  }
};
