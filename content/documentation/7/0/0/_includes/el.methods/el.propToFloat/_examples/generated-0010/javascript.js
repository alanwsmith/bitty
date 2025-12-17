[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElMethodsElProptofloat0010 = class {
    [@ method_name @](_, el) { 
    const got = el.propToFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
}
