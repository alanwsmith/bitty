  bittyReady() {
    this.api.querySelector('[data-name=elbid0010]').click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isSender;
  }
