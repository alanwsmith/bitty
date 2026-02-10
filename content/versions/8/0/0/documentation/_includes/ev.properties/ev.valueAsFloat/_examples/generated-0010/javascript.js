[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvPropertiesEvValueasfloat0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValueasfloat0010(ev, el) {
    if (ev.valueAsFloat === 75.75) {
      el.innerHTML = "got float";
    }
  }
}
