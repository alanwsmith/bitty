[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElMethodsElProptoint0030 = class {
  
  runElMethodsElProptoint0030(_, el) {
    const value = el.propToInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
}
