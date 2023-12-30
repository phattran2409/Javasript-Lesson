// nếu như đặt biến là Let thì có thể thay đổi trong quá trình biên dịch
let name = 'Phat'; 
name ="tran";
console.log(name);
// đặt biến const thì biến đó sẽ được cố định trong suốt quá trình và không thể thay
// đổi 
const Fname = 'Phat'; 
//  sẽ phát sinh ra lỗi vì variable const 
// Fname = 'Tran'; 
console.log(Fname);

// output with innerHTML
document.getElementById("number").innerHTML = 11+1;
document.getElementById("Add").innerHTML = 11+11;
// alert 
alert ( 5 + 6);
//
function myFunction() { 
    document.getElementById("demo1").innerHTML = "Hello"; 
    document.getElementById("demo2").innerHTML = "dolly";
    
}
// variable with innerHTML
let fname = "phat"; 
let lname = "tran"; 
let age   = 19;
const Pi  = 3.14; 


    document.getElementById("fname").innerHTML = fname; 
    document.getElementById("lname").innerHTML = lname; 
    document.getElementById("age").innerHTML =   age + "<br>" + Pi ;
// sum 
const Ipad = 100,iphone=500;
const total = Ipad + iphone; 
    document.getElementById("total").innerHTML = total;