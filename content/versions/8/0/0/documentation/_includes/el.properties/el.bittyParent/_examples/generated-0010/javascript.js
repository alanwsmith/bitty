[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElBittyparent0010 = class {
    // put a test value that can be check for
  bittyInit() {
    this.api.dataset.checker = "ping";
  }

  [@ method_name @](_, el) {
    if (el.bittyParent.dataset.checker === "ping") {
      el.innerHTML = "found parent";
    }
  }
}
