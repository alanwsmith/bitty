  bittyReady() {
    this.api.querySelector(".clickme").click();
  }

  $METHOD_NAME(ev, el) {
    if (el.bittyId === ev.sender.dataset.bittyid) {
      el.innerHTML = "got element";
    }
  }
