window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elIsTarget(_, el) {
    el.innerHTML = el.isTarget;
  }
}