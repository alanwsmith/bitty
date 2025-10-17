TODO: data-functions is not yet in place

data-functions adds functions to `this.api.fn`.

It provides the ability to reuse functions
across multiple components/pages as a type
of plugin system. 


- Look for `window.bittyFunctions`

- Look for `data-functions="functionVar` at
`window.functionVar = { fnName = () => {} }`

- Look for `data-functions="functionVar|funcVar2`
etc..

- Look for `data-functions="/some/path.js"`
for a single file to include

- Look for `data-functions="/some/path.js|/some/other/path.js"`
for multiple paths to include

- TODO: Determine if it should be able to pick
up from all three at the same time. Probably not.
if there's a data-functions then the window.bittyFunctions
should not come into play at all. However, it should
be possible to do: `data-connect="localFuncs|/path/to-funcs.js"`



