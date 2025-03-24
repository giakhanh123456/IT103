let input = parseInt(prompt("Nhap so luong can liet ke"));

if(!isNaN(input)&&input>0){
    document.writeln(`Day fibonacii 1-${input} la:`);
    let a = 0, b = 1;
    if (input > 1) document.writeln(` ${b} `); 
    
    for (let i = 1; i < input; i++) {
        let next = a + b;
        document.writeln(` ${next} `);
        a = b;
        b = next;
    }
}else{
    alert("Sai cu phap");
}
