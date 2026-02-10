window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  senderValueAsIntEv(ev, el) {
    el.innerHTML = ev.sender.valueAsInt;
  }
}
