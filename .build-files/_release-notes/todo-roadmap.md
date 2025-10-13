### TODO/ROADMAP 

DATE: TBD

- TODO: Set `display: block` if there is
no `class` or `style` on the `bitty` tag. 
(TBD if it should be `block` or `inline-block`
after digging into the details)

- TODO: Renamed: `this.api.useTemplate()` to 
just `this.api.template()`. 

- TODO: Switched to array or arrays for find
replace strings for `this.api.template()`

- TODO: Providing an empty default array 
to `this.api.template()` so that the only
thing that has to be passed is the string
for the template. 

- TODO: Set up a way to allow for awaiting
forwarded signals. 

- TODO: Added `this.api.dsMatch("KEY")`
checks `event.target.dataset.KEY` against
`el.dataset.KEY` and returns `true` if
they match or `false` if the don't (or
if one or both is missing)

- TODO: Added `this.api.uuidMatch()` that
checks `event.target.dataset.uuid` against
`el.dataset.uuid` and returns `true` if
they match or `false` if the don't (or
if one or both is missing)


