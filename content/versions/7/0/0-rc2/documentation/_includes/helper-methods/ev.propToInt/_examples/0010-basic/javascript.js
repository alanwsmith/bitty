window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propToIntEv(ev, el) {
    el.innerHTML = ev.sender.propToInt("item");
  }
}

