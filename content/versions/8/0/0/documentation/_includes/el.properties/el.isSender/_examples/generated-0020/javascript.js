[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElIssender0020 = class {
    bittyReady() {
    this.api.querySelector(".clickme").click();
  }

  [@ method_name @](_, el) {
    el.innerHTML = el.isSender;
  }
}
