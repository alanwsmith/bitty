[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElMethodsElProptofloat0030 = class {
    [@ method_name @](_, el) {
    const value = el.propToFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
}
