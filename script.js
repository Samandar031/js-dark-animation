// 1-masala

let a = [4, 4, 1, 3];
let b = [];

for (let i = 0; i < a.length; i++) {
  // let c = Math.max(a[i]);
  // b.push(c);
  // console.log(Math.max(Number(b.join(""))));
  if (a[i] > a.length - i) {
    b.push(a[i]);
    console.log(b);
  }
}
