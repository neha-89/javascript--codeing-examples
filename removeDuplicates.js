function removeDuplicates(arr, n)
{
    // Return, if array is empty
    // or contains a single element
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);
 
    // Start traversing elements
    var j = 0;
    for (var i=0; i<n-1; i++)
 
        // If current element is not equal
        // to next element then store that
        // current element
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
 
    // Store the last element as whether
    // it is unique or repeated, it hasn't
    // stored previously
    temp[j++] = arr[n-1];
 
    // Modify original array
    for (var i=0; i<j; i++)
        arr[i] = temp[i];
 
    return j;
}
 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
    var n = arr.length;
 
    // removeDuplicates() returns new size of
    // array.
    n = removeDuplicates(arr, n);
 
    // Print updated array
    for (var i=0; i<n; i++)
      console.log( arr[i]+" ");
 
