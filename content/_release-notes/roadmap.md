## Roadmap 

- TODO: Added ingestion of fucntions from 
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



