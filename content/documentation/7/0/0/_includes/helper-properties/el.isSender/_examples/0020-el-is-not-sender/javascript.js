window.[@ item.name|title @][@ item.memberof|title @]False = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elIsNotSender(_, el) {
    el.innerHTML = el.isSender;
  }
}