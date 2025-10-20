## Roadmap 

- TODO: rename `useHTML` to `makeEl` when
the next breaking change bump to v3.x.x happens


- TODO: Added ingestion of fucntions from 
the module js files into `this.api.fn`. 
If there are naming collisions the order
last one in the chain of `[@ config.tag_name @]`,
`window.bittyFunctions`, module function
exports wins. 

- TODO: Added a top level `class State {}` and
`const s = new State()` to provide state across
components. 

- TODO: Set up the `<bitty-#-#>` tag to receive signals
via `data-receive`

- TODO: Added `usePageTemplate()` that pulls
a template from the overall page via
a query selector.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

- TODO: Added `await:signal` to `data-send`
and `this.api.forward(event, "signal")`
to await async methods

- TODO: Include a top level `s = new State()`
object that all the bitty elements
on the page can use to collaborate. 
