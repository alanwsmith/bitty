  bittyReady() {
    this.api.querySelector("button").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isSender;
  }
