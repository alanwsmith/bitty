[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasfloat0020 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElPropasfloat0020");
  }

  runElMethodsElPropasfloat0020(_, el) {
    const value = el.propAsFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
}
