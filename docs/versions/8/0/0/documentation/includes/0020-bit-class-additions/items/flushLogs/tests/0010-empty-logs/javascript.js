signal_25CD5(_, el) {
  this.flushLogs();
  el.innerHTML = this.logs().map((log) => {
    return `[${this.localTimestamp(log.timestamp)}] ${log.text}`;
  }).join("");
}
