[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasint0040 = class {
  bittyReady() {
    this.api.localTrigger("runElMethodsElPropasint0040");
  }

  runElMethodsElPropasint0040(_, el) {
    el.innerHTML = el.propAsInt("delta");
  }
}
