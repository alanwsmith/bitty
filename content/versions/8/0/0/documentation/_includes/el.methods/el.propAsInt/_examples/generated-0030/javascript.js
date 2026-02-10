[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasint0030 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElPropasint0030");
  }

  runElMethodsElPropasint0030(_, el) {
    const value = el.propAsInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
}
