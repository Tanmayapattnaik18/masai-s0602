// Problem 1: Find the average of elements present at odd index of the following array.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let s= [10, 24, 56, 72, -10, -88, 100, 564];
let r=0;
let c=0;
s.forEach((e,i)=>{
  if(i%2!=0){
    r+=e;
    c++;
  }
  return r;
})
console.log(r/c);