- bitty adds a `data-uuid` attributes with 
a random UUID to itself and every
element with a `data-call`, `data-receive`,
or `data-send` (both for elements that
exist at initilization and any new
elements that are added after).

    These UUIDs can be used to differentiate 
    elements when necessary (e.g. in loops).