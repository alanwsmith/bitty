[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvValueasint0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValueasint0010(ev, el) {
    if (ev.valueAsFloat === 3030) {
      el.innerHTML = "got int";
    }
  }
}
