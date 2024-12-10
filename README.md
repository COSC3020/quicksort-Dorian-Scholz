# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.  

Answer: The worst case runtime occurs when the array is already sorted (ascending or descending) or all elements are identical. In this case, the partitions are highly unbalanced leading to n levels of recursion and n operations per level. 

Worst Case: Θ(n^2)
