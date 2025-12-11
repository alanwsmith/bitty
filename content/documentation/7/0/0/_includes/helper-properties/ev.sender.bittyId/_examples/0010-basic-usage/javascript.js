window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  bittyIdEv(ev, el) {
    el.innerHTML = ev.sender.bittyId;
  }
}