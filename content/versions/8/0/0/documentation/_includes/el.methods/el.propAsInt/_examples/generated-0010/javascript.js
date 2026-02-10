[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasint0010 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElPropasint0010");
  }

  runElMethodsElPropasint0010(_, el) {
    const value = el.propAsInt("alfa");
    if (value === 2000) {
      el.innerHTML = "received integer";
    }
  }
}
