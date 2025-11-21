## Roadmap 

- TODO: Set up so that `data-init` only triggers
once for any given signal. 

- TODO: Set up so `this.api.trigger()` can 
make multiple calls (e.g. `this.api.trigger("alfa bravo")`)

- TODO: Investigate: Added a `disconnectedCallback()`
to clean up anything that can be
removed when a component is removed.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

- TODO: Consider: `this.api.getData(el, KEY)`, 
which gets the `data-KEY` value of an
elements attribute or goes up the tree
to the DOM root for ancestors to find
the first one that's available. Result
would be a payload with either 
`{ value: 'the-value'}` or `{ error: PAYLOAD}`

  Should also have: `this.api.getDataInt(KEY)`
  and `this.api.getDataFloat()`.



