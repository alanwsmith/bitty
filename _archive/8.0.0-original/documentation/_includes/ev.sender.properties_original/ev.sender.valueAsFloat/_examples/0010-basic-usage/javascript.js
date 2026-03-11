window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  senderValueAsFloatEv(ev, el) {
    el.innerHTML = ev.sender.valueAsFloat;
  }
}
