let mSec = 100
while (mSec < 3000) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, mSec);

  mSec += 200;
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, mSec);
  
  mSec += 200;

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, mSec);

  mSec += 200;
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, mSec);

  mSec += 200;
}

setTimeout(() => {
  console.log();
}, mSec);