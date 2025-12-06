window.[@ item.name|title @][@ item.memberof|title @]False = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elMatchesSender2(_, el) {
    el.innerHTML = el.matchesSender("item");
  }
}

