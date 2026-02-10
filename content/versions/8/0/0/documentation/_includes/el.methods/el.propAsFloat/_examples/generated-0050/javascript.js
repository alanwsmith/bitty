[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasfloat0050 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElPropasfloat0050");
  }

  runElMethodsElPropasfloat0050(_, el) {
    el.innerHTML = el.propAsFloat("echo")
  }
}
