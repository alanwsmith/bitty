window.[@ item.name|title @]EvSender = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }
  propToIntEvSender(ev, el) {
    el.innerHTML = ev.sender.propToInt("item");
  }
}

