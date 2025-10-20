## History

Reference notes about the evolution of
the project. 

- Any earlier prototype limited signals 
so they stopped at the component by default
with a forwarding mechanism that
allowed signals to be seen outside. 
That added complexity to the overall
code and the mental model of working
with the components themselves. 

The approach is now to send signals
all the way to the document root
and for each component to have
it's listeners attached to the 
document root. That means that
if two components try to use 
the same signal name for different
purposes, they'll collide.

Bitty's goal is to make things easier
to build. Not to build complex systems.
In that line, if a collision occurs
the solution is to rename one of the
signals. That's much lower overhead
than dealing with limiting and forwarding
mechanisms. 
