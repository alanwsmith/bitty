window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propToFloatEvSender(ev, el) {
    el.innerHTML = ev.sender.propToFloat("item");
  }
}

