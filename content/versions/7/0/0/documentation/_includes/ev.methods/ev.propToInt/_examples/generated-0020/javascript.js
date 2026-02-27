[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvMethodsEvProptoint0020 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptoint0020(ev, el) {
    const value = ev.propToInt("bravo");
    if (value === 7000) {
      el.innerHTML = "received integer";
    }
  }

}
