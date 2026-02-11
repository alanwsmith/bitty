<script>
  window.Class_657b5 = class {
    bittyReady() {
      const payload = JSON.stringify({ status: "PASSED" });
      localStorage.setItem("test-signal_3e4c1", payload);
      this.api.trigger("signal_3e4c1");
    }

    signal_3e4c1(_, el) {
      const data = this.api.getStorageOr("test-signal_3e4c1", { status: "FAILED"});
      el.innerHTML = data.status;
    }
  }
</script>
