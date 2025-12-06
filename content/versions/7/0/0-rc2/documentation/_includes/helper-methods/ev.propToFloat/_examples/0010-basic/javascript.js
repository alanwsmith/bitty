window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propToFloatEv(ev, el) {
    el.innerHTML = ev.sender.propToFloat("item");
  }
}
