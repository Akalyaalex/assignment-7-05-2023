function printIntersection(arr1, arr2, m, n)
{
    var i = 0, j = 0;
    while (i < m && j < n)
    {
        if (arr1[i] < arr2[j])
            i++;
        else if (arr2[j] < arr1[i])
            j++;
        else
        {
            document.write(arr2[j++] + " ");
            i++;
        }
    }
}
 
// Driver code
var arr1 = [ 4, 5, 8, 9 ];
var arr2 = [ 3, 4, 5, 7 ];
 
var m = arr1.length;
var n = arr2.length;
 
printIntersection(arr1, arr2, m, n);