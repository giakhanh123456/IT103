let n = Number(prompt("Nhap n: "))
if( n>0 && !isNaN(n))
{
    document.writeln("So chia het cho 5 tu 1 toi " + n +" la: " )
    for( let i = 5; i<=n; i+=5)
    {
        document.writeln(i)
    }
}else
{
    document.writeln("Khong hop le")
}