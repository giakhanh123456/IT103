let str = "Hello World";
let input = prompt("Nhap vao chuoi can tim: ");

if(str.indexOf(input)!=-1){
    document.writeln(`${input} duoc tim thay "${str}"`);
}else{
    document.writeln(`${input} khong tim thay "${str}"!!!`);
}