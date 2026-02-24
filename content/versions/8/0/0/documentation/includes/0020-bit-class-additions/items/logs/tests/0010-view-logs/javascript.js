signal_29A17(_, el) {
  this.flushLogs();
  el.innerHTML = `Logs in the global array: ` + this.logs().length;
}
