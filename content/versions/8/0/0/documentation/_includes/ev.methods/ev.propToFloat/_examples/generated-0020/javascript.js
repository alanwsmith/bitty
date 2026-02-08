[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvProptofloat0020 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptofloat0020(ev, el) {
    const value = ev.propToFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
}
