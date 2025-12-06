window.[@ item.name|title @][@ item.memberof|title @]False = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elMatchesTarget2(_, el) {
    el.innerHTML = el.matchesTarget("item");
  }
}