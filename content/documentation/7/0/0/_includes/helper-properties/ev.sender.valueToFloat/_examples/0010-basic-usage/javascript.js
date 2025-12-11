window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  senderValueToFloatEv(ev, el) {
    el.innerHTML = ev.sender.valueToFloat;
  }
}
