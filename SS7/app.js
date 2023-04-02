 let a=123;
 let b='132'
 const PI = 3.14;
 console.log(1=="1");
 console.log(1==="1");
if(2< 1){
    console.log("dung")
    console.log("dung: ", dung);
}  
else{
    console.log("sai");
}
let diem = 4; // có thể thay đổi để test thuật toán
if (diem <= 10 && diem >= 8.5) { // Cả 2 điều kiện đồng thời đúng
  console.log("Giỏi");
}
else if (diem < 8.5 && diem >= 6.5) { // điều kiện con
  console.log("Khá");
}
else if (diem < 6.5 && diem >= 5) {
  console.log("Trung Bình");
}
else if (diem < 5 && diem >= 3) {
  console.log("Kém");
}
else {
  console.log("Liệt");
}
// var dùng cho cả phạm vi, let chỉ cho 1 vùng