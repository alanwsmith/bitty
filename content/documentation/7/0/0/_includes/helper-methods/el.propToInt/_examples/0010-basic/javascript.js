window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propToIntEl(_, el) {
    el.innerHTML = el.propToInt("item");
  }
}

