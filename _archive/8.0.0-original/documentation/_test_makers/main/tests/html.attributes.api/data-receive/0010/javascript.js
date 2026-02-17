  bittyReady() {
    this.api.localTrigger("$METHOD_NAME")
  }

  $METHOD_NAME(_, el) {
    el.replaceChildren(
      this.api.htmlFromTemplate("divFor$METHOD_NAME")
    )
  }

