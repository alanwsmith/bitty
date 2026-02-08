[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvValuetoint0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValuetoint0010(ev, el) {
    if (ev.valueToFloat === 3030) {
      el.innerHTML = "got int";
    }
  }
}
