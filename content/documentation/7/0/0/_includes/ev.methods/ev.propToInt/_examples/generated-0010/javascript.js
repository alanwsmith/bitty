[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvMethodsEvProptoint0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptoint0010(ev, el) {
    const value = ev.propToInt("alfa");
    if (value === 2000) {
      el.innerHTML = "received integer";
    }
  }
}
