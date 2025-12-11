window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  valueToFloatEv(ev, el) {
    el.innerHTML = ev.valueToFloat;
  }
}