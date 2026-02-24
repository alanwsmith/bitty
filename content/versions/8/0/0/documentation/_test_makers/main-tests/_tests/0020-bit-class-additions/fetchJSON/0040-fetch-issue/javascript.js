async $SIGNAL_NAME(_, el) {
  const url = "/file-that-does-not-exist.json";
  const result = await this.fetchJSON("data_$SIGNAL_NAME", url);
  if (result.ok === false) {
    el.innerHTML = JSON.stringify(result, null, 2);
  }
}