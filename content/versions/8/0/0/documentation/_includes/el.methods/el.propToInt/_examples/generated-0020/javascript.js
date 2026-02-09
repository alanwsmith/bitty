[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElProptoint0020 = class {
    bittyReady() {
    this.api.localTrigger("runElMethodsElProptoint0020");
  }

  runElMethodsElProptoint0020(_, el) {
    const value = el.propToInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

}
