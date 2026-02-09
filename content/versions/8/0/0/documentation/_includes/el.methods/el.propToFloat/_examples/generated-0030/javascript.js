[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElProptofloat0030 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElProptofloat0030");
  }

  runElMethodsElProptofloat0030(_, el) {
    const value = el.propToFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
}
