window.[@ item.name|title @][@ item.memberof|title @]False = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elIsNotTarget(_, el) {
    el.innerHTML = el.isTarget;
  }
}