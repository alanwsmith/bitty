window.ValueEvSender = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  senderValueEv(ev, el) {
    el.innerHTML = ev.sender.value;
  }
}
