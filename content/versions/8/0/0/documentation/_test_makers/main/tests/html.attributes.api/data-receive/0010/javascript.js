  bittyReady() {
    this.api.localTrigger("$METHOD_NAME")
  }

  $METHOD_NAME(_, el) {
    el.replaceChildren(this.api.makeHTML(this.api.template("divFor$METHOD_NAME")))
  }
