async $SIGNAL_NAME(_, el) {
  const url = "https://www.example.com/";
  const fallback = null;
  const options = {
    method: "POST",
    body: JSON.stringify({ key: "value" }),
  };
  // The server running this side does not accept
  // post requests. This shows how to make
  // one, but it's not tested here. 
  //
  //////////////////////////////////////////////////////////////////////
  // Example call:
  // await this.fetchFragment("fragment_$HASH", url, fallback, options);
  //////////////////////////////////////////////////////////////////////
}
