let input = prompt("Nhap so:");
if (isNaN(input) && input>0) {
    document.writeln("Khong hop le");
} else {
    let isPalindrome = true;
    let length = input.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (input[i]!==input[length-1-i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        document.writeln(input + "<br>La so doi xung");
    } else {
        document.writeln(input + "<br>Khong phai la so doi xung");
    }
}