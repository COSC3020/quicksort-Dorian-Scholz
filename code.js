function quicksort(array)
    {
    if (array.length <= 1) return array;

    let stack = [{ start: 0, end: array.length - 1 }];
    let result = array.slice();

    while (stack.length)
        {
            
        let { start, end } = stack.pop();

        if (start >= end) continue;

        let pivotIndex = partition(result, start, end);
        stack.push({ start, end: pivotIndex - 1 });
        stack.push({ start: pivotIndex + 1, end });
    }

    return result;
}

function partition(array, start, end)
    
{
    let pivot = array[end];
    let i = start;

    for (let j = start; j < end; j++)
        {
        if (array[j] < pivot) 
        {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }

    [array[i], array[end]] = [array[end], array[i]];

    return i;
}
