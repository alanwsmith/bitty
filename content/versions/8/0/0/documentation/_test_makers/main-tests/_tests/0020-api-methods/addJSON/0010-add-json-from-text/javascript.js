window.$CLASS_NAME = class {
  #id = "$ID_NAME";
  #content = `{ "status": "ok" }`;

  bittyReady() {
    this.api.addJSON("$ID_NAME", `{ "status": "ok"}`);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    el.innerHTML = this.json["$ID_NAME"].status;
  }
};
