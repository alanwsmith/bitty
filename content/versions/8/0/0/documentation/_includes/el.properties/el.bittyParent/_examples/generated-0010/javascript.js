[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElBittyparent0010 = class {
    bittyInit() {
    // put a test value that can be check for
    this.api.dataset.checker = "ping";
    this.api.localTrigger("[@ method_name @]");
  }

  [@ method_name @](_, el) {
    if (el.bittyParent.dataset.checker === "ping") {
      el.innerHTML = "found parent";
    }
  }

}
