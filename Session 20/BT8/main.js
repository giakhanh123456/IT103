let input = parseInt(prompt("Nhap so luong so nguyen to can in: "));
let num = 2; 
let count = 0;
if(!isNaN(input)&& input>2){
    while (count < input) {
        let isPrime = true;
        if (num < 2) isPrime = false;
        for (let i = 2; i<= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }   
        }
        if (isPrime) {
            document.writeln(` ${num} `);
            count++;
        }
        num++;
    }
}else{
    alert("Vui long nhap lai");
}
