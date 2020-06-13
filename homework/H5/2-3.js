var a = [[1, 2, 3], [3, 2, 1]];
var c = [];
for(i = 0; i < 3; i++)
{
    c[i] = [];
   for(j = 0; j < 2; j++)
   {
        c[i][j] = a[j][i];
   }
   
}
console.log(c);