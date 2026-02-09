[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElProptoint0010 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElProptoint0010");
  }

  runElMethodsElProptoint0010(_, el) {
    const value = el.propToInt("alfa");
    if (value === 2000) {
      el.innerHTML = "received integer";
    }
  }
}
