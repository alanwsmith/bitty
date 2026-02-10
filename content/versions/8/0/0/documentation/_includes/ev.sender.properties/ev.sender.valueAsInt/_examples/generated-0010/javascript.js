[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderPropertiesEvSenderValueasint0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvSenderPropertiesEvSenderValueasint0010(ev, el) {
    if (ev.sender.valueAsFloat === 3131) {
      el.innerHTML = "got int";
    }
  }
}
