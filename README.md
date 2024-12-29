# Uncommon JavaScript Bugs
This repository contains examples of uncommon JavaScript bugs, focusing on issues related to loops, comparisons, and off-by-one errors. These errors can be subtle and difficult to detect, leading to unexpected behavior or crashes in your application.

## Bugs

The `bug.js` file demonstrates some examples of these subtle bugs.  The `bugSolution.js` file provides corrected versions.

* **Incorrect Loop Termination:** Demonstrates how an incorrectly placed `break` statement can lead to unexpected loop termination.
* **Incorrect Array Value Check:** Shows a common mistake of directly comparing an array to a value instead of using appropriate methods to check for value existence (e.g., `includes()`).

## Solutions

The `bugSolution.js` file provides the corrected code for each of the bugs found in `bug.js`.  It shows how to properly structure loops, compare values against arrays, and avoid common off-by-one pitfalls.