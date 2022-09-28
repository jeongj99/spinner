let mSec = 100;
let symbols = ['|', '/', '-', '\\'];
while (mSec < 3000) {
  for (let symbol of symbols) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}   `);
    }, mSec += 200);
  }
}
setTimeout(() => { console.log(); }, mSec);