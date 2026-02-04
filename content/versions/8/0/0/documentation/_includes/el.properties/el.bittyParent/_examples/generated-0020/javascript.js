[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElBittyparent0020 = class {
    [@ method_name @](_, el) {
    if (el.bittyParent.dataset.bittyid) {
      el.innerHTML = el.bittyParent.dataset.bittyid !== el.bittyId;
    }
  }

/* 
TOdo: Handle this
window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @]Wrapper = class {
  // wrapper class to check for test
}
*/
}
