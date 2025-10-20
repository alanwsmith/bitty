Defines the class that provides functionality
to the component.

Availability: `<[@ config.tag_name @]>` elements: yes - child elements: no

Each `<[@ config.tag_name @]>` requires an external class
to provide its functionality. The class can reside in one of
four locations:

1. A `BittyClass` variable on the on the `window` object if
not `data-connect` attribute exists. For example:

        <[@ config.tag_name @]></[@ config.tag_name @]>

    looks on the current page for:

        window.BittyClass = class {}


2. A variable on the `window` object whose name is the
value of the `data-connect` attribute if it exists. For example:

        <[@ config.tag_name @] data-connect="MyExample"></[@ config.tag_name @]>

    looks on the page for:

        window.MyExample = class {}


3. The default export from an external module when the value
of `data-connect` is the path to the module. For example:

        <[@ config.tag_name @] data-connect="/some/module.js"></[@ config.tag_name @]>

    looks for a file at `/some/module.js` with a default class
    export like:

        export default class {}

4. A named class from an external module when the value
of `data-connect` is a path followed by a `|` then the
name of the class to look for. For example:

        <[@ config.tag_name @] data-connect="/some/module.js|AltExample"></[@ config.tag_name @]>

    looks for a file at `/some/module.js` with an exported class
    like

        export class AltExample {}


