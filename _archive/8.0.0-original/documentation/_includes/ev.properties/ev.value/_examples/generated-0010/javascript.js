[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvValue0010 = class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValue0010(ev, el) {
    el.innerHTML = ev.value;
  }
}
