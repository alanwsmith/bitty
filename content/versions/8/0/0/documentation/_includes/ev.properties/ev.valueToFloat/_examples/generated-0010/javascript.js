[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvValuetofloat0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValuetofloat0010(ev, el) {
    if (ev.valueToFloat === 75.75) {
      el.innerHTML = "got float";
    }
  }
}
