window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  elMatchesSender(_, el) {
    el.innerHTML = el.propMatchesSender("item");
  }
}

