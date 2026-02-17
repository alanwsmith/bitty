  #incomingValue = null;

  [@ method_name @](_, el) {
    this.#incomingValue = el.value;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }
