Memory Management
- avoid unwanted globals by using 'use strict'
- undeclared variables go into the global window object
- If you must use a global variable to store lots of data, make sure to null it or reassign it after you are done with it.
- Caches: One common cause for increased memory consumption in connection with globals are caches). Caches store data that is repeatedly used. For this to be efficient, caches must have an upper bound for its size. Caches that grow unbounded can result in high memory consumption because their contents cannot be collected.
- forgotten timers like setInterval can be problematic if they reference an object that might be removed at a later time although modern browsers usually detect and remove these
