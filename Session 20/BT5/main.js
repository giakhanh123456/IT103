let a = parseInt(prompt("Nhap gia tri a: "));
let b = parseInt(prompt("Nhap gia tri b: "));
let result = 1;

for (let i = 1; i <= b; i++) {
    result *= a;
}
document.writeln(result);