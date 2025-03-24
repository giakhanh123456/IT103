let n = Number(prompt("Nhap n: "))
if( n>0 && !isNaN(n))
{
    let sum=0;
    for( let i = 0; i<=n; i++)
    {
        sum += i
    }
    document.writeln(sum)
}else
{
    document.writeln("Du lieu nhap vao khong hop le")
}