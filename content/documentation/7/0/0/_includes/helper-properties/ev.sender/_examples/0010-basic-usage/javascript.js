window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  senderEvSender(ev, el) {
    el.innerHTML = ev.sender.dataset.bittyid;
  }
}