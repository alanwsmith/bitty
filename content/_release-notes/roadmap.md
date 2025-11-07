## Roadmap 

- TODO: Add tests for bittyCatch()

- TODO: Rename `getElements` and `makeElements`
to `getHTML` and `makeHTML` (`getElement` and
`makeElement` will stay the same)

- TODO: Renamed `response.ok` to `response.value`
for clarity and to avoid confusion with
things like `response.ok === false`. 
(i.e. `response.value === false` takes less 
mental overhead)

- TODO: Allow sending forward without
having to pass a null event. That is, 
if there's only one argument, it's
treated as the signal with a null event. 
So, `this.api.forward("NAME")` is 
equivalent to `this.api.forward(null, "NAME")`

- TODO: Added `data-s` alias for `data-send`
and `data-r` attribute for `data-receive`

- TODO: Added `makeTXT` which returns a 
text value from a template after running
substitutions over it. 

- TODO: Renamed `data-uuid` to `data-bittyid`
to namespace and prevent collisions with
anything else the wants to use `data-uuid`

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

