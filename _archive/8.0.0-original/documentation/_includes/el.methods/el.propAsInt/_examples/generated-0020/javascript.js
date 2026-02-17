[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasint0020 = class {
  bittyReady() {
    this.api.localTrigger("runElMethodsElPropasint0020");
  }

  runElMethodsElPropasint0020(_, el) {
    const value = el.propAsInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

}
