bittyReady() {
    this.api.querySelector(".clickme").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isTarget;
  }