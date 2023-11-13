# Big O Notation

Big O describes the efficiency of algorithms.

**O(s)** - "s" is the size; the time to run the algorithm increases linearly with the size of the data.
**O(1)** - As the size of the data increases, it won't take any longer for the algorithm to run.

Note: Algorithmic runtime can generally be described in three different ways: best case, worst case, and expected case. The best case is rarely discussed, and the worst case/expected case are usually the same.

Both time complexity and space complexity need to be considered.

Drop constants in runtime. For example, an algorithm that may be described as O(2N) is actually O(N).
Drop the non-dominant terms. For example, an algorithm that may be described as O(N + log N) is actually O(N).

General **Rate of Increase** for some of the common big O times (from most efficient to least efficient):
 - O(log x)
 - O(x)
 - O(x log x)
 - O(x<sup>2</sup>)
 - O(2<sup>x</sup>)
 - O(x!)

### Multi-Part Algorithms: Add vs Multiply

When do you multiply the runtimes, and when do you add them?

**Adding** - If your algorithm is in the form of 'do this, then this, then this ...,' you add the runtimes. O(A + B).

**Multiplying** - If your algorithm is in the form of 'do this for every time you do that,' then you multiply the runtimes. O(A * B).

### Log N Runtimes

If you see a problem where the number of elements in the problem space gets halved each time, that will likely be an O(log N) runtime

**Binary Search** is a great example of Log N runtimes. 

### Recursive Runtimes




