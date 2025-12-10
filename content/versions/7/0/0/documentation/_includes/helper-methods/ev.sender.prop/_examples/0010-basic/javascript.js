window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propEvSender(ev, el) {
    el.innerHTML = ev.sender.prop("item");
  }
}