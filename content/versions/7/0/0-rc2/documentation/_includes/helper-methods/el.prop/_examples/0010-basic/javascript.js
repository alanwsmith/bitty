window.[@ item.name|title @][@ item.memberof|title @] = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propEl(_, el) {
    el.innerHTML = el.sender.prop("item");
  }
}

