window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  valueEv(ev, el) {
    el.innerHTML = ev.value;
  }
}