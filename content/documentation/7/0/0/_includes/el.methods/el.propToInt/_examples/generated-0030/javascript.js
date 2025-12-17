[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElMethodsElProptoint0030 = class {
  
  [@ method_name @](_, el) {
    const value = el.propToInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
}
