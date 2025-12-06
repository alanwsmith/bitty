window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propToFloatEl(_, el) {
    el.innerHTML = el.sender.propToFloat("item");
  }
}

