[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasfloat0030 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElPropasfloat0030");
  }

  runElMethodsElPropasfloat0030(_, el) {
    const value = el.propAsFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
}
