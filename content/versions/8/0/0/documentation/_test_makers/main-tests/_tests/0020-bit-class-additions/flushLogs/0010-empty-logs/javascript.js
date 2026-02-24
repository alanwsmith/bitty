$SIGNAL_NAME(_, el) {
  this.flushLogs();
  el.innerHTML = this.logs().map((log) => log.text).join("");
}
