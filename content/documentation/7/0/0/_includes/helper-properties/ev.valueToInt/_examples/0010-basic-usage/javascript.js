window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  valueToIntEv(ev, el) {
    el.innerHTML = ev.valueToInt;
  }
}