[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvSenderPropertiesEvSenderValue0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvSenderPropertiesEvSenderValue0010(ev, el) {
    el.innerHTML = ev.sender.value;
  }
}
