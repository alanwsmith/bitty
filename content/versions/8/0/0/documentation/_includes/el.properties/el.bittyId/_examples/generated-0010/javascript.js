[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElBittyid0010 = class {
    bittyReady() {
    this.api.localTrigger("[@ method_name @]");
  }
  [@ method_name @](_, el) {
    if (el.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
}
