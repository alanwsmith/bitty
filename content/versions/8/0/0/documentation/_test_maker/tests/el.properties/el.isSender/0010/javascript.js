  bittyReady() {
    this.api.querySelector('[data-name=elbid0010]').click();
  }

  [@ method_name @](_, el) {
    console.log(el.bittyId);
    el.innerHTML = el.isSender;
  }
