var a = [[1, 2], [3, 4]];
var c = [];
for(i = 0; i < 2; i++)
{
    c[i] = [];
    for(j = 0; j < 2; j++)
    {
        c[i][j] = 0 - a[i][j];
    }
}
console.log(c);