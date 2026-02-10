[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderPropertiesEvSenderValueasfloat0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvSenderPropertiesEvSenderValueasfloat0010(ev, el) {
    if (ev.sender.valueAsFloat === 72.72) {
      el.innerHTML = "got float";
    }
  }
}
