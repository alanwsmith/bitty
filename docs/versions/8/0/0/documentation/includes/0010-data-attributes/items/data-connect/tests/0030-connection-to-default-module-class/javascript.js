export default class {
  bittyReady() {
    this.api.trigger("signal_0010_data_attributes_data_connect_0030_connection_to_default_module_class");
  }

  signal_0010_data_attributes_data_connect_0030_connection_to_default_module_class(_, el) {
    el.innerHTML = "PASSED";
  }
}
