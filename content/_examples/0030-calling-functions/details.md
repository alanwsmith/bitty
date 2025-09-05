- The `data-call` attribute can be used to call 
functions without sending signals. 


- The `event` is sent to the function.

- All update functionaly can be done via
    `data-send` in some cases. For others,
    like this example, using `data-call`
    separtes the signal from the update.
    Without that, each of the text output
    would increment the number directly. 

    See the next example for a 
    demonstration.