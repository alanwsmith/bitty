[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestEvMethodsEvPropasfloat0020 = class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvPropasfloat0020(ev, el) {
    const value = ev.propAsFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
}
