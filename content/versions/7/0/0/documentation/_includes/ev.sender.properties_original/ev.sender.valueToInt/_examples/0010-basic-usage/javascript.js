window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  senderValueToIntEv(ev, el) {
    el.innerHTML = ev.sender.valueToInt;
  }
}
