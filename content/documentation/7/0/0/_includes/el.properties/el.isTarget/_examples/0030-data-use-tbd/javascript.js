window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  bittyReady() {
    this.api.querySelector("div").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isTarget;
  }
}