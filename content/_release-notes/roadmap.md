## Roadmap 

- TODO: Rename `this.api.getFragment` to 
`this.api.getElements` (this is a breaking
change so it's a major version bump)

- TODO: Update the `this.api.forward` functionality
so that it can be fired with no/null signal.
At that point it falls back to a generic
`bittyForward`. This can be used, e.g. when
receiving a message from `.postMessage()`
that doesn't have a direct method for adding
in a `.dataset.send` key.

- TODO: Fix bug in `this.api.forward` where
an event that doesn't have a `.target` or
`.target.dataset` gets overridded. (i.e.
if there's an event at all, just forward it.
Probably add a UUID though)

- TODO: Added ingestion of functions from 
the module js files into `this.api.fn`. 
If there are naming collisions the order
last one in the chain of `[@ config.tag_name @]`,
`window.bittyFunctions`, module function
exports wins. 

- TODO: Investigate: Added a `disconnectedCallback()`
to clean up anything that can be
removed when a component is removed.

- TODO: Added `await:signal` to `data-send`
and `this.api.forward(event, "await:signal")`
to await async methods.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

- TODO: MAYBE: Added `usePageTemplate()` 
that pulls a template from the overall page 
via a query selector.

