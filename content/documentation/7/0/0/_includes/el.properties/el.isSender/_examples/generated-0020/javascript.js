[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElIssender0020 = class {
    bittyReady() {
    this.api.querySelector(".clickme").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isSender;
  }
}
