[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElIssender0010 = class {
    bittyReady() {
    this.api.querySelector("div").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isSender;
  }
}
