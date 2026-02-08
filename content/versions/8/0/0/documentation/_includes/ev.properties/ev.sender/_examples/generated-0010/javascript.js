[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvSender0010 = class {
    bittyReady() {
    this.api.querySelector(".clickme").click();
  }

  runEvPropertiesEvSender0010(ev, el) {
    if (el.bittyId === ev.sender.dataset.bittyid) {
      el.innerHTML = "got element";
    }
  }
}
