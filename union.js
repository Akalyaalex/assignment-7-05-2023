 m is the number of elements in arr1[]
    n is the number of elements in arr2[] */
    function printUnion( arr1,  arr2,  m,  n)
    {
        var i = 0, j = 0;
        while (i < m && j < n) {
            if (arr1[i] < arr2[j])
                document.write(arr1[i++] + " ");
            else if (arr2[j] < arr1[i])
                document.write(arr2[j++] + " ");
            else {
                document.write(arr2[j++] + " ");
                i++;
            }
        }
 
        /* Print remaining elements of
        the larger array */
        while (i < m)
            document.write(arr1[i++] + " ");
        while (j < n)
            document.write(arr2[j++] + " ");
 
        return 0;
    }
 
        var arr1 = [ 4, 5, 8, 9];
        var arr2 = [ 3, 4, 5, 7 ];
        var m = arr1.length;
        var n = arr2.length;
        printUnion(arr1, arr2, m, n);