[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElMethodsElProptofloat0020 = class {
    [@ method_name @](_, el) {
    const value = el.propToFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
}
