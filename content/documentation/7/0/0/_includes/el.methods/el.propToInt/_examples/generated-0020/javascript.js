[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElMethodsElProptoint0020 = class {
  
  [@ method_name @](_, el) {
    const value = el.propToInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

}
