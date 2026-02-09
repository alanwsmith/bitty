[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use: versions/#/#/#/documentation/_test_maker/make_test.py

######################################### #]

window.TestElPropertiesElIssender0010 = class {
    bittyReady() {
    this.api.querySelector('[data-name=elbid0010]').click();
  }

  [@ method_name @](_, el) {
    console.log(el.bittyId);
    el.innerHTML = el.isSender;
  }
}
