<script>
  window.Class_0aa78 = class {
    bittyReady() {
      this.api.setStorage("test-signal_e7a96", { status: "PASSED" });
      this.api.trigger("signal_e7a96");
    }

    signal_e7a96(_, el) {
      const data = this.api.getStorageOr("test-signal_e7a96", { status: "FAILED"});
      el.innerHTML = data.status;
    }
  }
</script>
