window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elMatchesTarget(_, el) {
    el.innerHTML = el.propMatchesTarget("item");
  }
}

