/*Write a program to compute number of integers divisible by k in range [a..b]. 
solution(a,b,k) -> returns an integrer*/


var a = 1;
var b = 10;
var k = 2;
count = 0;
for (var i=a+1; i<b; i++){
    if(i%k===0)
    count++
}
console.log(count);

