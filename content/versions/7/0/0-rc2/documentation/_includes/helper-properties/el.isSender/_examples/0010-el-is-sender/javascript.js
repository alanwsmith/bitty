window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elIsSender(_, el) {
    el.innerHTML = el.isSender;
  }
}