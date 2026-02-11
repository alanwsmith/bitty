<script>
  window.$CLASS_NAME = class {
    bittyReady() {
      this.api.setStorage("test-$SIGNAL_NAME", { status: "PASSED" });
      this.api.trigger("$SIGNAL_NAME");
    }

    $SIGNAL_NAME(_, el) {
      const data = this.api.getStorageOr("test-$SIGNAL_NAME", { status: "FAILED"});
      el.innerHTML = data.status;
    }
  }
</script>
