[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElBittyparent0030 = class {
    [@ method_name @](_, el) {
    if (el.bittyParent === null) {
      el.innerHTML = "null";
    }
    else {
      el.innerHTML = el.bittyParent;
    }
  }
}
