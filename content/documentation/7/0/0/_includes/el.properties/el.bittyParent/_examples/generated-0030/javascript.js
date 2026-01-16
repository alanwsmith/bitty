[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


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
