<script>
  window.$CLASS_NAME = class {
    bittyReady() {
      const payload = JSON.stringify({ status: "PASSED" });
      localStorage.setItem("test-$SIGNAL_NAME", payload);
      this.api.trigger("$SIGNAL_NAME");
    }

    $SIGNAL_NAME(_, el) {
      const data = this.api.getStorageOr("test-$SIGNAL_NAME", { status: "FAILED"});
      el.innerHTML = data.status;
    }
  }
</script>
