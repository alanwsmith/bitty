[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderPropertiesEvSenderBittyid0010 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderPropertiesEvSenderBittyid0010(ev, el) {
    if (ev.sender.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
}
