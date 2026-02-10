[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElPropasfloat0010 = class {
  bittyReady() {
    this.api.localTrigger("runElMethodsElPropasfloat0010");
  }

  runElMethodsElPropasfloat0010(_, el) { 
    const got = el.propAsFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
}
