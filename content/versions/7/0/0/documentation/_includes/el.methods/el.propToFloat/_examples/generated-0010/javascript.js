[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElMethodsElProptofloat0010 = class {
    runElMethodsElProptofloat0010(_, el) { 
    const got = el.propToFloat("item");
    if (got === 10.01) {
      el.innerHTML = "received float";
    }
  }
}
