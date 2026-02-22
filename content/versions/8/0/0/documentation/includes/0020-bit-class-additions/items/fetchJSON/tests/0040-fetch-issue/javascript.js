async test_signal_5862A(_, el) {
  const url = "/file-that-does-not-exist.json";
  const result = await this.fetchJSON("data_signal_5862A", url);
  if (result.ok === false) {
    //el.innerHTML = JSON.stringify(result, null, 2);
  }
}