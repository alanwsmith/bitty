window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  bittyIdEv(ev, el) {
    el.innerHTML = ev.bittyId;
  }
}