  bittyReady() {
    this.api.querySelector("div").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isSender;
  }
