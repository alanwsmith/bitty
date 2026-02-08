[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderPropertiesEvSenderValuetofloat0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvSenderPropertiesEvSenderValuetofloat0010(ev, el) {
    if (ev.sender.valueToFloat === 72.72) {
      el.innerHTML = "got float";
    }
  }
}
