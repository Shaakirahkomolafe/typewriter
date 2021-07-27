const sentence = "Hi, my name is shakirat!";


let time = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, 3000);


// let time = 1000
// const x = string => {
//   for (const char of string) {
//     setTimeout(() => {
//       process.stdout.write(char)
//     }, time)
//     time += 50
//   }
  
//   setTimeout(() => {
//     console.log("\n");
//   }, 2500);
// }