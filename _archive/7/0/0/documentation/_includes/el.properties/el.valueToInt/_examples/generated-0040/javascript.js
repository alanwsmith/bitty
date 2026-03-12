[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElValuetoint0040 = class {
    #incomingValue = null;

  runElPropertiesElValuetoint0040(_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("runElPropertiesElValuetoint0040Output");
  }

  runElPropertiesElValuetoint0040Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }

}
