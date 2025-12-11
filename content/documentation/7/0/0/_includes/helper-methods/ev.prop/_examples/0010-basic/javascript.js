window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propEv(ev, el) {
    el.innerHTML = ev.sender.prop("item");
  }
}
